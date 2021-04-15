import { TOKEN_VALIDATED, USER_FETCHED } from './authTypes';

const userKey = 'money_user';
const INITIAL_STATE = {
  user: { name: 'bruno', email: 'brunoc.rez@gmail.com'},//JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null }
      }
    case USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, validToken: true, user: action.payload }
    default:
      return state;
  }
} 