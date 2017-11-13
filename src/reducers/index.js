import  { combineReducers } from 'redux';
import offersReducer from './offers';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  offers: offersReducer,
  filters: filtersReducer
});

export default rootReducer;
