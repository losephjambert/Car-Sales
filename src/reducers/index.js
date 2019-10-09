import { combineReducers, createStore } from 'redux';
import additionalPrice from './additionalPrice.reducer';
import car from './car.reducer';

const rootReducer = combineReducers({
  additionalPrice,
  car,
});

const store = createStore(rootReducer);

export default store;
