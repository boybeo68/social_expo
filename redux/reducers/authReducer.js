import { ADD, SIGN_UP_SUCCESS } from '../type';

const initialState = {
  count: 100,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.payload };
    case SIGN_UP_SUCCESS:
      console.log('token', action.data);
      return { ...state, data: action.data };
    default:
      return state;
  }
};
