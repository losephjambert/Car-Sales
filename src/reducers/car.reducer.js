import initialState from '../state';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const { car } = initialState;

export default (state = car, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        features: [...state.features, { ...action.payload }],
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        features: [...state.features.filter(f => f.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
