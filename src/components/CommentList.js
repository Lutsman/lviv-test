import * as React from 'react';
import {connect} from 'react-redux';

import {Comment} from "./Comment";
import {CommentForm} from "./CommentForm";
import {articleCommentDelete} from "../AC/articles";

export const CommentListComponent = props => {
    const {article, deleteComment} = props;

    if (!article) return null;

    const body = article.comments && article.comments.map(comment => {
        const handleDelete = () => deleteComment(comment.id);
        return (
            <li key={comment.id}>
                <Comment
                    comment={comment}
                    handleDelete={handleDelete}/>
            </li>
        );
    });


    return (
        <div>
            <ul className="comment-list">{body}</ul>
            <CommentForm articleId={article.id}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch, props) => ({
    deleteComment: id => dispatch(articleCommentDelete(props.article.id, id)),
});

export const CommentList = connect(null, mapDispatchToProps)(CommentListComponent);
