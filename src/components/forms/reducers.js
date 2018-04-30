import { PROJECT_ADD } from '../projects/reducers';

export const IMAGE_ADD = 'IMAGE_ADD';

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