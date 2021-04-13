import { USER_FETCHED, TOKEN_VALIDATED } from './authTypes';

import axios from 'axios';
import { toastr } from 'react-redux-toastr';

export function login(values) {
  return submit(`${process.env.OPEN_API_URL}/login`, values);
}

export function singup() {
  return submit(`${process.env.OPEN_API_URL}/signup`, values);
}

function submit(URL, values) {
  return dispatch => {
    axios
      .post(URL, values)
      .then(res => dispatch([{ type: USER_FETCHED, payload: res.data }]))
      .catch(e => {
        e.response.data.errors.forEach(er => toastr.error('Erro', er));
      })
  }
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false }
}