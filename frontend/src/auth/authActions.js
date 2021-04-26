import { USER_FETCHED, TOKEN_VALIDATED } from './authTypes';

import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { OPEN_API_URL } from '../URLs';

export function login(values) {
  return submit(`${OPEN_API_URL}/login`, values);
}

export function signup(values) {
  return submit(`${OPEN_API_URL}/signup`, values);
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