import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducer from './main/reducers';

import AuthOrApp from './main/authOrApp';
import { AuthProvider } from './contexts/AuthContext';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducer);

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
  </AuthProvider>,
  document.getElementById('app')
);