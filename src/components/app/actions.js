import { SIGN_IN, LOAD_USER } from '../forms/reducers';
import apiFunctions from '../../services/projectsApi';
import { REMOVE_ERROR } from './error-loading/reducers';

export const setUserToState = auth => (
  {
    type: SIGN_IN,
    payload: auth
  });

export const loadUser = id => (
  {
    type: LOAD_USER,
    payload: apiFunctions.loaduser(id)
  });

export const removeError = () => (
  {
    type: REMOVE_ERROR,
  });