
import { IMAGE_ADD, SIGN_UP, SIGN_IN } from './reducers';
import apiFunctions from '../../services/projectsApi';

export const addImage = image => ({
  type: IMAGE_ADD,
  payload: image
});

export const signUp = data => (
  {
    type: SIGN_UP,
    payload: apiFunctions.signup(data)
  });

export const signIn = data => (
  {
    type: SIGN_IN,
    payload: apiFunctions.signin(data)
  });

