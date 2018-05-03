export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';
export const LOAD_USER = 'LOAD_USER';

export const addUserToState = (state = null, { type, payload }) => {
  switch(type){
    case ADD_USER_TO_STATE:
      return payload;
    case LOAD_USER:
      return payload;
    default:
      return state;
  }
};