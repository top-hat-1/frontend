
import { IMAGE_ADD, SIGN_UP, SIGN_IN, SIGN_OUT } from './reducers';
import apiFunctions from '../../services/projectsApi';

export const addImage = image => ({
  type: IMAGE_ADD,
  payload: image
});

export const signUp = data => (
  localStorage.getItem('token') ? null : apiFunctions.signup(data).then(r => localStorage.setItem('token', r.token)),
  {
    type: SIGN_UP,
    payload: apiFunctions.signup(data)
  });

export const signIn = data => (
  localStorage.getItem('token') ? null : apiFunctions.signin(data).then(r => localStorage.setItem('token', r.token)),
  {
    type: SIGN_IN,
    payload: apiFunctions.signin(data)
  });

export const signOut = () => (
  localStorage.clear(),
  {
    type: SIGN_OUT,
    payload: null
  });