import * as React from 'react';
import {connect} from 'react-redux';

export class CommentForm extends React.Component {
    state = {
        comment: '',
    };

    handleChange = e => {};

    handleSubmit = e => {};

    render() {
        const {} = this.props;

        return (
            <div className="comment-form">
                <input type="text" onChange={this.handleChange}/>
                <input type="submit" onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    addComment: comment => dispatch({
        type: 'ADD_COMMENT',
        payload: {comment, articleId: props.id},
    }),
});
