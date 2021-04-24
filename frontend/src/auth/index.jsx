import './auth.css';

import React, { useState } from 'react';
import axios from 'axios';

import Row from '../common/layout/Row';
import Grid from '../common/layout/Grid';
import ToastMessages from '../common/messages/ToastMessages';

import { OPEN_API_URL } from '../URLs';

const Auth = (props) => {

  const [loginMode, setLoginMode] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function clearState() {
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
  }

  function changeMode() {
    setLoginMode(prevState => !prevState);
    clearState();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email, 
      password,
      confirm_password: confirmPassword,
      name
    };
    
    if (loginMode) {
      submit('login', data);
    } else {
      submit('signup', data);
    }
  }

  function submit(param, data) {
    axios.post(`${OPEN_API_URL}/${param}`, data);
  }

  return (
    <div className="login-box">
      <div className="login-logo"> Money</div>
      <div className="login-box-body">
        <p className="login-box-msg">Bem-vindo!</p>
        <form onSubmit={handleSubmit}>
          { !loginMode && 
            <div className="form-group has-feedback">
              <input
                className="form-control"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}/>
                <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>          
          }
          <div className="form-group has-feedback">
            <input
              className="form-control"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              className="form-control"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}/>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          { !loginMode && 
            <div className="form-group has-feedback">
              <input
                className="form-control"
                type="password"
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>          
          }
          <Row>
            <Grid cols="12">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat">
                {loginMode ? 'Entrar' : 'Registrar'}
              </button>
            </Grid>
          </Row>
        </form>
        <br />
        <a onClick={() => changeMode()}>
          {loginMode ? 'Novo Usuário? Registre-se Aqui!' : 'Já possui cadastro? Entre Aqui!'}
        </a>
      </div>
      <ToastMessages />
    </div>
  );
}

export default Auth;