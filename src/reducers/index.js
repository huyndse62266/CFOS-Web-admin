import {combineReducers} from 'redux';
import products from './products/products';
import system from './system'

const appReducers= combineReducers({ //Truyền state vào đây
    products,
    system
 });
 export default appReducers;