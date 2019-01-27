import * as React from 'react';
import {connect} from 'react-redux';

import {ArticlePreview} from "./ArticlePreview";
import {articleDelete, articlesLoad} from "../AC/articles";

export class ArticleListComponent extends React.Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {articles, deleteArticle} = this.props;
        const articleItems = articles && articles.map(article => {
            const handleDelete = () => deleteArticle(article.id);

            return (
                <li key={article.id}>
                    <ArticlePreview article={article} handleDelete={handleDelete}/>
                </li>
            );
        });

        if (!articleItems) return null;

        return (
            <div className="article-list">
                {articleItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
});

const mapDispatchToPtops = dispatch => ({
    loadArticles: () => dispatch(articlesLoad()),
    deleteArticle: id => dispatch(articleDelete(id)),
});

export const ArticleList = connect(mapStateToProps, mapDispatchToPtops)(ArticleListComponent);
