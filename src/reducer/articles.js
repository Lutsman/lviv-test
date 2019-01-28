import {
    ARTICLE_COMMENT_CREATE,
    ARTICLE_COMMENT_DELETE,
    ARTICLE_CREATE,
    ARTICLE_DELETE,
    ARTICLES_LOAD_START,
    ARTICLES_LOAD_ERROR,
    ARTICLES_LOAD_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    items: null,
    errors: [],
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload, randomId, currentDate} = action;

    switch (type) {
        case ARTICLES_LOAD_START:
            return {
                ...state,
                loading: true,
            };
        case ARTICLES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                items: payload.articles,
            };
        case ARTICLES_LOAD_ERROR:
            const {error} = payload;

            error.type = ARTICLES_LOAD_ERROR;

            return {
                ...state,
                loading: false,
                errors: [...state.errors, error],
            };
        case ARTICLE_CREATE:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...payload.article,
                        id: randomId,
                        date: currentDate,
                    },
                ],
            };
        case ARTICLE_DELETE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload.id),
            };
        case ARTICLE_COMMENT_CREATE:
            return {
                ...state,
                items: state.items.map(article =>
                    article.id === payload.articleId ?
                        {
                            ...article,
                            comments: [...article.comments, {...payload.comment, id: randomId}],
                        } :
                        article),
            };
        case ARTICLE_COMMENT_DELETE:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === payload.articleId ?
                        {
                            ...item,
                            comments: item.comments.filter(comment => {
                                return comment.id !== payload.commentId;
                            }),
                        } :
                        item),
            };
        default:
            return state;
    }
};
