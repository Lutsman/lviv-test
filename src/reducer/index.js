import {combineReducers} from 'redux';

import articleReducer from './articles';

export const rootReducer = combineReducers({
    articles: articleReducer,
});
