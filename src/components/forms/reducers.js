import { PROJECT_ADD } from '../projects/reducers';

export const IMAGE_ADD = 'IMAGE_ADD';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


export const imageAdd = (state = null, { type, payload }) => {
  switch(type){
    case IMAGE_ADD:
      return payload;
    case PROJECT_ADD:
      return null;
    default:
      return state;
  }
};

export const auth = (state = null, { type, payload }) => {
  switch(type) {
    case SIGN_UP:
    case SIGN_IN:
      return payload;
    case SIGN_OUT:
      return payload;
    default:
      return state;
  }
};