import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import Routes from './main/routes';
import reducer from './main/reducers';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);