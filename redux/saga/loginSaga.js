import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../../config';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../type';
export function* fetchData(action) {
  try {
    console.log(action);
    const data = yield Api.post('api/auth', {
      password: action.pass,
      email: action.email,
    });
    console.log('TUNG', data.data);
    yield put({ type: LOGIN_SUCCESS, data: data.data });
  } catch (error) {
    console.log('error', error);
  }
}
export function* watchFetchUser() {
  yield takeLatest(LOGIN_REQUEST, fetchData);
}
