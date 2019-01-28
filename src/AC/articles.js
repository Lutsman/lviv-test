import {
    ARTICLE_COMMENT_CREATE,
    ARTICLE_COMMENT_DELETE,
    ARTICLE_CREATE,
    ARTICLE_DELETE,
    ARTICLES_LOAD,
    ARTICLES_LOAD_ERROR,
    ARTICLES_LOAD_START,
    ARTICLES_LOAD_SUCCESS,
    ARTICLES_SAVE,
} from "../constants";

export const articlesLoad = () => ({
    type: ARTICLES_LOAD,
});

export const articlesLoadStart = () => ({
    type: ARTICLES_LOAD_START,
});

export const articlesLoadSuccess = articles => ({
    type: ARTICLES_LOAD_SUCCESS,
    payload: {articles},
});

export const articlesLoadError = error => ({
    type: ARTICLES_LOAD_ERROR,
    payload: {error},
});

export const articlesSave = () => ({
    type: ARTICLES_SAVE,
});

export const articleCreate = article => ({
    type: ARTICLE_CREATE,
    payload: {article},
    generateId: true,
    generateDate: true,
});

export const articleDelete = id => ({
    type: ARTICLE_DELETE,
    payload: {id},
});

export const articleCommentCreate = (articleId, comment) => ({
    type: ARTICLE_COMMENT_CREATE,
    payload: {articleId, comment},
    generateId: true,
});

export const articleCommentDelete = (articleId, commentId) => ({
    type: ARTICLE_COMMENT_DELETE,
    payload: {articleId, commentId},
});
