import { INCREE, LOGIN_SUCCESS } from '../type';

const initialState = {
  count: 6,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREE:
      return { ...state, count: state.count + action.payload };
    case 'FETCH_SUCCEEDED':
      return { ...state, data: action.data };
    case LOGIN_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
