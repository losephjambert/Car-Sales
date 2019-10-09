import initialState from '../state';
const { additionalPrice } = initialState;

export default (state = additionalPrice, action) => {
  switch (action.type) {
    default:
      console.log('additionalPriceReducer default case', state);
      return state;
  }
};
