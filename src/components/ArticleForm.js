import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

import {FormValidation} from "./common/FormValidation";
import {articleCreate} from "../AC/articles";

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
            <form className="article-form" onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="user"
                        className={this.getValidationClassName('user')}
                        onChange={this.handleChange('user')}
                        value={user}/>
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="title"
                        className={this.getValidationClassName('title')}
                        onChange={this.handleChange('title')}
                        value={title}/>
                </div>
                <div className="form-control">
                        <textarea
                            placeholder="awesome article"
                            className={this.getValidationClassName('text')}
                            onChange={this.handleChange('text')}
                            value={text}/>
                </div>
                <div className="form-control form-submit">
                    <input type="submit" disabled={!this.isValidForm()}/>
                </div>
            </form>
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
