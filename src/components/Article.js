import * as React from 'react';
import {connect} from 'react-redux';

import {Header} from "./Header";
import {CommentList} from "./CommentList";
import {articleSelector} from "../selectors/articles";

export const ArticleComponent = props => {
    const {article} = props;

    return (
        <div>
            <Header
            btnBack={true}>
                <h2>{article.title}</h2>
            </Header>
            <section>{article.text}</section>
            <CommentList article={article}/>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    article: articleSelector(state, props),
});

export const Article = connect(mapStateToProps)(ArticleComponent);
