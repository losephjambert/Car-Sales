import { combineReducers, createStore } from 'redux';
import additionalPrice from './additionalPrice.reducer';
import car from './car.reducer';
import additionalFeatures from './additionalFeatures.reducer';

const rootReducer = combineReducers({
  additionalPrice,
  car,
  additionalFeatures,
});

const store = createStore(rootReducer);

export default store;
