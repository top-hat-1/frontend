export const COMMENT_ADD = 'COMMENT_ADD';
export const COMMENT_REMOVE = 'COMMENT_REMOVE';
export const COMMENTS_LOAD = 'COMMENTS_LOAD';

export function comments(state = [], { type, payload }) {
  switch(type) {
    case COMMENTS_LOAD:
      return payload;

    case COMMENT_ADD:
      return [...state, payload];
    
    case COMMENT_REMOVE:
      return state.filter(m => m._id !== payload);

    default:
      return state;
  }
}
