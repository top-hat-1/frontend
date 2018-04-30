export const IMAGE_ADD = 'IMAGE_ADD';

export const imageAdd = (state=null, { type, payload }) => {
    switch(type){
        case IMAGE_ADD :
          return payload;
        default:
          return state;
    }
};