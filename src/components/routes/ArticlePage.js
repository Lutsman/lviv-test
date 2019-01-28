import * as React from 'react';

import {Article} from "../Article";

export const ArticlePage = ({match}) => (
    <div>
        <Article id={match.params.id}/>
    </div>
);
