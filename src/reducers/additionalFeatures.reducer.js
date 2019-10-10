import initialState from '../state';
const { additionalFeatures } = initialState;

export default (state = additionalFeatures, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
