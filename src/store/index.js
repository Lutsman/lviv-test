import {createStore, applyMiddleware, compose} from 'redux';
import {}  from 'redux-saga';
import {rootReducer} from "../reducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware());

export const store = createStore(rootReducer, enhancer);
