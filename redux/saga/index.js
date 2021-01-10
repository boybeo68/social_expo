import { all, call, delay, put, takeEvery } from 'redux-saga/effects';
import { INCREE } from '../type';
import { watchFetchUser } from './loginSaga';

export function* helloSaga() {
  console.log('Hello Saga!');
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: INCREE, payload: 3 });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(helloSaga), call(watchIncrementAsync), call(watchFetchUser)]);
}
