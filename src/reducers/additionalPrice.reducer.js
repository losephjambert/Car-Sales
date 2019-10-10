import initialState from '../state';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const { additionalPrice } = initialState;

export default (state = additionalPrice, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return state + action.payload.price;
    case REMOVE_FEATURE:
      return state - action.payload.price;
    default:
      console.log('additionalPriceReducer default case', state);
      return state;
  }
};
