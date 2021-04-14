import './auth.css';

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login, signup } from './authActions';
import Row from '../common/layout/Row';
import Grid from '../common/layout/Grid';
import ToastMessages from '../common/messages/ToastMessages';
import Input from '../common/form/InputAuth';

class Auth extends Component {
  
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  }

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  }

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="login-box">
        <div className="login-logo"> Money</div>
        <div className="login-box-body">
          <p className="login-box-msg">Bem-vindo!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <Field
              component={Input}
              type="input"
              name="name"
              placeholder="Nome"
              icon="user"
              show={loginMode} />
            <Field
              component={Input}
              type="email"
              name="email"
              placeholder="E-mail"
              icon="envelope" />
            <Field
              component={Input}
              type="password"
              name="password"
              placeholder="Senha"
              icon="lock" />
            <Field
              component={Input}
              type="password"
              name="confirm_password"
              placeholder="Confirmar Senha"
              icon="lock"
              show={loginMode} />
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
          <a onClick={() => this.changeMode()}>
            {loginMode ? 'Novo Usuário? Registre-se Aqui!' : 'Já possui cadastro? Entre Aqui!'}
          </a>
        </div>
        <ToastMessages />
      </div>
    );
  }
}

Auth = reduxForm({ form: 'authForm' })(Auth);
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);

export default connect(null, mapDispatchToProps)(Auth);

