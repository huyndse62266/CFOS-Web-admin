import { combineReducers } from 'redux';
import system from './system/systemReducer';
import product from './Product/ProductReducer';

export default combineReducers({
  system,
  product
});
