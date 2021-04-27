import '../common/template/dependencies';

import React, { Component, useContext, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import App from './app';
import Auth from '../auth';

import { OPEN_API_URL } from '../URLs';

import { AuthContext } from '../contexts/AuthContext';

const AuthOrApp = (props) => {
  
  const { loggedUser, setLoggedUser } = useContext(AuthContext);
  
  function validateToken(token) {    
    if (token) {
      axios
        .post(`${OPEN_API_URL}/validateToken`, { token })
        .then(() => {
          setLoggedUser({ ...loggedUser, validToken: true })
        })
        .catch(() => {
          setLoggedUser({ ...loggedUser, validToken: false })
        })
    } else {
      setLoggedUser({ ...loggedUser, validToken: false })
    }
  }

  useEffect(() => {
    if (loggedUser.user) {
      validateToken(loggedUser.user.token);
    }
  }, []); 
  
  const { user, validToken } = loggedUser;
  
  if (user && validToken) {
    axios.defaults.headers.common['authorization'] = user.token;
    return <App>{props.children}</App>;
  } else if (!user && !validToken) {
    return <Auth />;
  } else {
    return false;
  }
  
}

export default AuthOrApp;