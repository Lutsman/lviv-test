import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {ArticlePreview} from "./ArticlePreview";
import {LoadingSpinner} from "./LoadingSpinner";
import {articleDelete, articlesLoad} from "../AC/articles";
import {articlesSelector, loadArticlesErrorSelector, loadedSelector, loadingSelector} from "../selectors/articles";

export class ArticleListComponent extends React.Component {
    componentDidMount() {
        const {loaded, loading} = this.props;

        if (loaded || loading) return;

        this.props.loadArticles();
    }

    render() {
        return (
            <div className="article-list">
                {this.getBody()}
                <div className="controls">
                    <Link to="/articles/new">
                        <button className="button-add">+</button>
                    </Link>
                </div>
            </div>
        );
    }

    getBody() {
        const {articles, deleteArticle, loading, loaded, loadError} = this.props;

        if (loading) return (<LoadingSpinner/>);

        if (!loaded) {
            if (loadError) {
                return (<h2>{loadError.message}</h2>);
            }

            return null;
        }

        const articleItems = articles && articles.map(article => {
            const handleDelete = () => deleteArticle(article.id);

            return (
                <li key={article.id}>
                    <ArticlePreview article={article} handleDelete={handleDelete}/>
                </li>
            );
        });

        if (!articleItems) return null;

        return (<ul>{articleItems}</ul>);
    }
}

const mapStateToProps = state => ({
    articles: articlesSelector(state),
    loaded: loadedSelector(state),
    loading: loadingSelector(state),
    loadError: loadArticlesErrorSelector(state),
});

const mapDispatchToPtops = dispatch => ({
    loadArticles: () => dispatch(articlesLoad()),
    deleteArticle: id => dispatch(articleDelete(id)),
});

export const ArticleList = connect(mapStateToProps, mapDispatchToPtops)(ArticleListComponent);
