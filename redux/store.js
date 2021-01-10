import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
import { reducers } from './index';
import rootSaga from './saga';
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
