import * as React from 'react';

import {Comment} from "./Comment";
import {CommentForm} from "./CommentForm";

export const CommentList = props => {
    const {article} = props;

    if (!article) return null;

    const body = article.comments && article.comments.map(comment => (
        <li key={comment.id}>
           <Comment comment={comment}/>
        </li>
    ));


    return (
        <section>
            <ul className="comment-list">{body}</ul>
            <CommentForm articleId={article.id}/>
        </section>
    );
};
