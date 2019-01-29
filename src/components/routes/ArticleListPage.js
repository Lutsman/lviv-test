import * as React from 'react';

import {ArticleList} from "../ArticleList";


export const ArticleListPage = () => {
    return (
        <div>
            <header>
                <h1>Sayer</h1>
                <div>World's most used time waster</div>
            </header>
            <section>
                <ArticleList/>
            </section>
        </div>
    );
};
