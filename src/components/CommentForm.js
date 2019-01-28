import * as React from 'react';
import {connect} from 'react-redux';

import {FormValidation} from "./common/FormValidation";
import {articleCommentCreate} from "../AC/articles";

export class CommentFormComponent extends FormValidation {
    state = {
        user: '',
        text: '',
    };

    limits = {
        user: {
            min: 3,
            max: 20,
        },
        text: {
            min: 10,
        },
    };

    fields =[
        'user',
        'text',
    ];

    render() {
        const {user, text} = this.state;

        return (
            <div className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="user"
                        className={this.getValidationClassName('user')}
                        onChange={this.handleChange('user')}
                        value={user}/>
                    <textarea
                        type="text"
                        placeholder="comment"
                        className={this.getValidationClassName('text')}
                        onChange={this.handleChange('text')}
                        value={text}/>
                    <input type="submit"
                           disabled={!this.isValidForm()}/>
                </form>
            </div>
        );
    }

    handleSubmit = e => {
        const {submit} = this.props;
        const {user, text} = this.state;

        e.preventDefault();

        if (!this.isValidForm()) return;

        this.setState({
            user: '',
            text: '',
        });

        submit({
            user,
            text,
        });
    };
}

const mapDispatchToProps = (dispatch, props) => ({
    submit: comment => dispatch(articleCommentCreate(props.articleId, comment)),
});

export const CommentForm = connect(null, mapDispatchToProps)(CommentFormComponent);
