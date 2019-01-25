import * as React from 'react';

import {Header} from "./Header";
import {CommentList} from "./CommentList";

export const Article = props => {
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