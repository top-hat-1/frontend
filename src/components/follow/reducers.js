export const FOLLOW_ADD = 'FOLLOW_ADD';

export function following(state = [], { type, payload }) {
  switch(type) {
    case FOLLOW_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}