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
    const {type, payload, randomId} = action;

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
                items: action.articles,
            };
        case ARTICLES_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                errors: [...state.errors, payload.error],
            };
        case ARTICLE_CREATE:
            const {article} = action;
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...article,
                        id: randomId,
                    },
                ],
            };
        case ARTICLE_DELETE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id),
            };
        case ARTICLE_COMMENT_CREATE:
            return {
                ...state,
                items: state.items.map(article =>
                    article.id === action.articleId ?
                        {
                            ...article,
                            comments: [...article.comments, {...action.comment, id: randomId}],
                        } :
                        article),
            };
        case ARTICLE_COMMENT_DELETE:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.articleId ?
                        {
                            ...item,
                            comments: item.comments.filter(comment => comment.id !== action.commentId),
                        } :
                        item),
            };
        default:
            return state;
    }
};
