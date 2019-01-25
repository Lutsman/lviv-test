import * as React from 'react';
import {connect} from 'react-redux';

export class ArticleFormComponent extends React.Component {
    state = {
        title: '',
        titleIs: null,
        text: '',
        textIs: null,

    };

    render() {
        return (
            <div className="new-article-form">
                <input
                    type="text"
                    placeholder="title"
                    onChange={this.handleChange('title')}/>
                <textarea
                    placeholder="awesome article"
                    onChange={this.handleChange('text')}/>
                <input
                    type="submit"
                    disabled={this.validate()}
                    onSubmit={this.handleSubmit}/>
            </div>
        );
    }

    handleChange = field => e => {
        const val = e.target.value;

        this.setState({
            [field]: val,
            [field + 'Is']: !!val,

        });

    };


    handleSubmit = e => {
        const {submit} = this.props;
        const {title, text} = this.state;

        e.preventDefault();

        if (!this.validate()) return;

        submit({title, text});
    };


    validate() {
        const {titleIs, textIs} = this.state;

        return titleIs && textIs;
    }

}

const mapDispatchToProps = dispatch => ({
    submit: payload => dispatch({type: 'NEW_ARTICLE_CREATE', payload}),
});

export const ArticleForm = connect(null, mapDispatchToProps)(ArticleFormComponent);
