export const PROJECTS_LOAD = 'PROJECTS_LOAD';
export const PROJECT_LOAD = 'PROJECT_LOAD';
export const PROJECT_ADD = 'PROJECT_ADD';
export const PROJECT_REMOVE = 'PROJECT_REMOVE';

export function projects(state = [], { type, payload }) {
  switch(type) {

    case PROJECTS_LOAD:
      return payload;

    case PROJECT_ADD:
      return [...state, payload];
  
    case PROJECT_REMOVE:
      return state.filter(p => p._id !== payload);

    
    default:
      return state;
  }
}
export function project(state = [], { type, payload }) {
  switch(type) {

    case PROJECT_LOAD:
      return payload;

    case PROJECT_REMOVE:
      return null;
    
    // TODO project update

    default:
      return state;
  }
}