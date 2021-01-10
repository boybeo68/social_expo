import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { ADD, ADD_REQUEST } from '../type';
import { watchSignUp } from './authSaga';

export function* helloSaga() {
  console.log('Hello Saga!');
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: ADD, payload: 2 });
}

export function* watchIncrementAsync() {
  yield takeEvery(ADD_REQUEST, incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(helloSaga), call(watchIncrementAsync), call(watchSignUp)]);
}
