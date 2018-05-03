
import { IMAGE_ADD, SIGN_UP, SIGN_IN, SIGN_OUT, AVI_ADD } from './reducers';
import apiFunctions from '../../services/projectsApi';

export const addImage = image => ({
  type: IMAGE_ADD,
  payload: image
});

export const addAvi = image => ({
  type: AVI_ADD,
  payload: image
});

export const updateUser = (url, id) => {
  apiFunctions.updateuser(url, id);
};

export const signUp = data => (
  localStorage.getItem('token') ? null : apiFunctions.signup(data).then(r => localStorage.setItem('token', r.token)),
  localStorage.getItem('name') ? null : apiFunctions.signup(data).then(r => localStorage.setItem('name', r.name)),
  localStorage.getItem('_id') ? null : apiFunctions.signup(data).then(r => localStorage.setItem('_id', r._id)),
  // ADD COMMENTS, FOLLOWS, ETC
  {
    type: SIGN_UP,
    payload: apiFunctions.signup(data)
  });

export const signIn = data => (
  localStorage.getItem('token') ? null : apiFunctions.signin(data).then(r => localStorage.setItem('token', r.token)),
  localStorage.getItem('name') ? null : apiFunctions.signin(data).then(r => localStorage.setItem('name', r.name)),
  localStorage.getItem('_id') ? null : apiFunctions.signin(data).then(r => localStorage.setItem('_id', r._id)),
  // ADD COMMENTS, FOLLOWS, ETC
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