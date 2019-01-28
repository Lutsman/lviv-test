import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';

import {
    ARTICLE_COMMENT_CREATE,
    ARTICLE_COMMENT_DELETE,
    ARTICLE_CREATE, ARTICLE_DELETE,
    ARTICLES_LOAD,
    ARTICLES_SAVE
} from "../constants";
import {articlesLoadError, articlesLoadStart, articlesLoadSuccess, articlesSave} from "../AC/articles";
import {getArticles, setArticles} from "../api/articles";
import {articlesSelector, loadedSelector} from "../selectors/articles";

export function* loadArticles() {
    const loaded = yield select(loadedSelector);
    if (loaded) return;
    yield put(articlesLoadStart());
    try {
        const articles = yield call(getArticles);
        yield put(articlesLoadSuccess(articles));
    } catch (error) {
        yield put(articlesLoadError(error));
    }
}

export function* saveArticles() {
    const articles = select(articlesSelector);
    yield call(setArticles, articles);
}

export function* dispatchArticlesSaving() {
    yield put(articlesSave());
}

export default function* () {
    yield takeLatest(ARTICLES_LOAD, loadArticles);
    yield takeLatest(ARTICLES_SAVE, saveArticles);
    yield takeEvery(ARTICLE_CREATE, dispatchArticlesSaving);
    yield takeEvery(ARTICLE_DELETE, dispatchArticlesSaving);
    yield takeEvery(ARTICLE_COMMENT_CREATE, dispatchArticlesSaving);
    yield takeEvery(ARTICLE_COMMENT_DELETE, dispatchArticlesSaving);
}
