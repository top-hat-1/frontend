import { SIGN_IN } from '../forms/reducers';

export const setUserToState = auth => (
  {
    type: SIGN_IN,
    payload: auth
  });