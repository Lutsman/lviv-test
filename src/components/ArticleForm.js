import * as React from 'react';
import {connect} from 'react-redux';

import {FormValidation} from "./common/FormValidation";
import {articleCreate} from "../AC/articles";
import {Redirect} from "react-router-dom";

export class ArticleFormComponent extends FormValidation {
    state = {
        user: '',
        title: '',
        text: '',
        submited: false,
    };

    limits = {
        user: {
            min: 3,
            max: 20,
        },
        title: {
            min: 3,
            max: 50,
        },
        text: {
            min: 20,
        },
    };

    fields = [
        'user',
        'title',
        'text',
    ];

    render() {
        const {user, title, text, submited} = this.state;

        if (submited) return (<Redirect to="/articles"/>);

        return (
            <div className="new-article-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="user"
                        className={this.getValidationClassName('user')}
                        onChange={this.handleChange('user')}
                        value={user}/>
                    <input
                        type="text"
                        placeholder="title"
                        className={this.getValidationClassName('title')}
                        onChange={this.handleChange('title')}
                        value={title}/>
                    <textarea
                        placeholder="awesome article"
                        className={this.getValidationClassName('text')}
                        onChange={this.handleChange('text')}
                        value={text}/>
                    <input
                        type="submit"
                        disabled={!this.isValidForm()}/>
                </form>
            </div>
        );
    }

    handleSubmit = e => {
        const {submit} = this.props;
        const {user, title, text} = this.state;

        e.preventDefault();

        if (!this.isValidForm()) return;

        submit({
            user,
            title,
            text,
        });

        this.setState({
            user: '',
            title: '',
            text: '',
            submited: true,
        });
    };
}

const mapDispatchToProps = dispatch => ({
    submit: article => dispatch(articleCreate(article)),
});

export const ArticleForm = connect(null, mapDispatchToProps)(ArticleFormComponent);
