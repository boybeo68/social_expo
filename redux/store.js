import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import logger from 'redux-logger';
import { reducers } from './reducers/index';
import rootSaga from './sagas';
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
