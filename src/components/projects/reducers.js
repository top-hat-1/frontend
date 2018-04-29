export const PROJECTS_SAVE = 'PROJECTS_SAVE';

export function projects(state = [], { type, payload }) {
  switch(type) {

    case PROJECTS_SAVE:
      return payload;
    
    default:
      return state;
  }
}