import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { ADD, ADD_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../type';
import API from '../../config';
export function* onSignUp(action) {
  try {
    let result = yield API.post('api/users', {
      name: action.name,
      email: action.email,
      password: action.password,
    });
    yield put({ type: SIGN_UP_SUCCESS, data: result.data });
  } catch (error) {
    alert(error);
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, onSignUp);
}
