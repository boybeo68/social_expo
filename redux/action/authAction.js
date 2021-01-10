import { INCREE, LOGIN_REQUEST } from '../type';

export const increeCount = (param) => ({
  type: INCREE,
  payload: param,
});
export const increeAsync = (param) => ({
  type: 'INCREMENT_ASYNC',
});
export const fetchData = (param) => ({
  type: 'CHECK_API',
});
export const login = (email, pass) => ({
  type: LOGIN_REQUEST,
  email,
  pass,
});
