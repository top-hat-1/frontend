export const FOLLOW_ADD = 'FOLLOW_ADD';
export const FOLLOW_LOAD = 'FOLLOW_LOAD';

export function following(state = [], { type, payload }) {
  switch(type) {
    case FOLLOW_ADD:
      return [
        payload
      ];
    case FOLLOW_LOAD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}