import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import {  BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MenuList from './components/Menu/MenuList';
import DirectURL from './routes/directURL';
import Footer from './components/Footer/Footer';
//Khai báo Provider gói tất cả component con vào đây
const store = createStore(
    appReducers,
    window.__REDUS_DEVTOOLS_EXTENSION__ && window.__REDUS_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>

      </BrowserRouter>
    </Provider>
) 

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
