import {combineReducers} from 'redux';
import products from './products/products';

const appReducers= combineReducers({ //Truyền state vào đây
    products
 });
 export default appReducers;