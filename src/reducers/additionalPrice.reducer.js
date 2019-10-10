import initialState from '../state';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

export default (state = initialState.additionalPrice, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return state + action.payload.price;
    case REMOVE_FEATURE:
      return state - action.payload.price;
    default:
      return state;
  }
};
