import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {rootReducer} from "../reducer";
import {sagas} from '../middlewares/sagas';
import {randomId} from "../middlewares/randomId";
import {currentDate} from "../middlewares/currentDate";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware, randomId, currentDate];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
