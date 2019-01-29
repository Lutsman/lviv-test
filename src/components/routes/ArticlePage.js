import * as React from 'react';
import {connect} from 'react-redux';

import {ButtonBack} from "../common/ButtonBack";
import {CommentList} from "../CommentList";
import {articleSelector} from "../../selectors/articles";

export const ArticlePageComponent = props => {
    const {article} = props;

    return (
        <div>
            <header>
                <div className="header-inner">
                    <ButtonBack>
                        <i className="fa fa-arrow-circle-o-left" />
                    </ButtonBack>
                    <h2>{article.title}</h2>
                </div>
            </header>
            <section>
                <div className="container">
                    {article.text}
                </div>
            </section>
            <section>
                <div className="container">
                    <CommentList article={article}/>
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    article: articleSelector(state, props),
});

export const ArticlePage = connect(mapStateToProps)(ArticlePageComponent);
