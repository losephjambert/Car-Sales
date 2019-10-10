import initialState from '../state';
import { ADD_FEATURE } from '../actions';

const { car } = initialState;

export default (state = car, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const features = [...state.features, { ...action.payload }];
      return {
        ...state,
        features,
      };
    default:
      return state;
  }
};
