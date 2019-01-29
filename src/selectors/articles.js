import {createSelector} from 'reselect';

import {ARTICLES_LOAD_ERROR} from "../constants";

export const articlesSelector = state => state.articles.items;
export const loadedSelector = state => state.articles.loaded;
export const loadingSelector = state => state.articles.loading;
export const errorsSelector = state => state.articles.errors;
export const idFromPropsSelector = (state, props) => props.match.params.id;

export const loadArticlesErrorSelector = createSelector(errorsSelector, errors => {
    for (let i = errors.length -1; i >= 0; i--) {
        const error = errors[i];

        if (error.type !== ARTICLES_LOAD_ERROR) continue;

        return error;
    }
});

export const articleSelector = createSelector(articlesSelector, idFromPropsSelector, (items, id) => {
    if (!items) return {};

    return items.filter(item => item.id === id)[0];
});