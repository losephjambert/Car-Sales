import initialState from '../state';
const { additionalPrice } = initialState;

export const additionalPriceReducer = (state = additionalPrice, action) => {
  switch (action.type) {
    default:
      console.log('additionalPriceReducer default case', state);
      return state;
  }
};
