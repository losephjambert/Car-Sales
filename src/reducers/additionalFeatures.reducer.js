import initialState from '../state';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const { additionalFeatures } = initialState;

export default (state = additionalFeatures, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      console.log('add feature', state, action.payload);
      return [...state.filter(f => f.id !== action.payload.id)];
    case REMOVE_FEATURE:
      const sortedState = [...state, { ...action.payload }].sort((a, b) => a.id - b.id);
      return sortedState;
    default:
      return state;
  }
};
