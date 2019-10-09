import initialState from '../state';
const { car } = initialState;

export default (state = car, action) => {
  switch (action.type) {
    default:
      console.log('carReducer default case', state);
      return state;
  }
};
