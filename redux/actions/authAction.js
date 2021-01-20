import { ADD, ADD_REQUEST, SIGN_UP_REQUEST } from '../type';

export const incree = (param) => ({
  type: ADD,
  payload: param,
});
export const requestAdd = () => ({
  type: ADD_REQUEST,
});
export const signUpRequest = (name, email, password, navigation) => ({
  type: SIGN_UP_REQUEST,
  name,
  email,
  password,
  navigation
});
