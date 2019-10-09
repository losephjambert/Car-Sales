import { combineReducers, createStore } from 'redux';
import { additionalPriceReducer } from './additionalPrice.reducer';

const rootReducer = combineReducers({
  additionalPriceReducer,
});

const store = createStore(rootReducer);

export default store;
