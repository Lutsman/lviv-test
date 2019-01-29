import * as React from 'react';

import {ArticleForm} from "../ArticleForm";
import {ButtonBack} from "../common/ButtonBack";

export const NewArticlePage = () => (
    <div>
        <header>
            <div className="header-inner">
                <ButtonBack>
                    <i className="fa fa-arrow-circle-o-left" />
                </ButtonBack>
                <h2>Create new article</h2>
            </div>
        </header>
        <section>
            <div className="container">
                <ArticleForm/>
            </div>
        </section>

    </div>
);
