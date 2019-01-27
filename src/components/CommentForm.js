import * as React from 'react';
import {connect} from 'react-redux';
import {articleCommentCreate} from "../AC/articles";

export class CommentFormComponent extends React.Component {
    state = {
        comment: '',
    };

    handleChange = e => {
        const comment = e.target.value;

        this.setState({comment});
    };

    handleSubmit = e => {
        const {addComment} = this.props;

        addComment(this.state);
        this.setState({
            comment: '',
        })
    };

    render() {
        const {comment} = this.state;

        return (
            <div className="comment-form">
                <input type="text" onChange={this.handleChange} value={comment}/>
                <input type="submit" onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    addComment: comment => dispatch(articleCommentCreate(props.id, comment)),
});

export const CommentForm = connect(null, mapDispatchToProps)(CommentFormComponent);
