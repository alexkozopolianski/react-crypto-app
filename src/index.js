import './index.css';
import App from './App';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from './reducers/index';

const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
