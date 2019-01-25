import * as React from 'react';
import {connect} from 'react-redux';

import {ArticlePreview} from "./ArticlePreview";

export class ArticleListComponent extends React.Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {articles, deleteArticle} = this.props;
        const articleItems = articles && articles.map(article => (
            <li key={article.id}>
                <ArticlePreview article={article} handleDelete={() => deleteArticle(article.id)}/>
            </li>
        ));

        if (!articleItems) return null;

        return (
            <div className="article-list">
                {articleItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state => state.articles,
});

const mapDispatchToPtops = dispatch => ({
    loadArticles: () => dispatch({type: 'LOAD_ARTICLES'}),
    deleteArticle: id => dispatch({
        type: 'DELETE_ARTICLE',
        payload: {id},
    })
});

export const ArticleList = connect(mapStateToProps, mapDispatchToPtops)(ArticleListComponent);
