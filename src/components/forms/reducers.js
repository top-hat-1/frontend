import { PROJECT_ADD } from '../projects/reducers';

export const IMAGE_ADD = 'IMAGE_ADD';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';


export const imageAdd = (state = null, { type, payload }) => {
  switch(type){
    case IMAGE_ADD :
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
      return payload;
    case SIGN_IN:
      return payload;
    default:
      return state;
  }
};