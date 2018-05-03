import { SIGN_IN } from '../forms/reducers';
import { LOAD_USER } from '../forms/reducers';
import apiFunctions from '../../services/projectsApi';

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