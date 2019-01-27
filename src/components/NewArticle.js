import * as React from 'react';

import {Header} from "./Header";
import {ArticleForm} from "./ArticleForm";

export const NewArticle = () => (
    <div>
        <Header
            btnBack={true}>
            <h2>Create new article</h2>
        </Header>
        <ArticleForm/>
    </div>
);
