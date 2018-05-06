export const PROJECTS_LOAD = 'PROJECTS_LOAD';
export const PROJECT_LOAD = 'PROJECT_LOAD';
export const PROJECT_ADD = 'PROJECT_ADD';
export const PROJECT_REMOVE = 'PROJECT_REMOVE';
export const PROJECT_UPDATE = 'PROJECT_UPDATE';
import unshiftProject from './unshift';


export function projects(state = [], { type, payload }) {
  switch(type) {

    case PROJECTS_LOAD:
      return payload;

    case PROJECT_ADD:
      return unshiftProject(state, payload);
  
    case PROJECT_REMOVE: 
      return state.filter(p => p._id !== payload);

    case PROJECT_UPDATE: {
      const index = state.findIndex(p => p._id === payload._id); // id vs. _id??
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }

    default:
      return state;
  }
}
export function project(state = null, { type, payload }) {
  switch(type) {

    case PROJECT_LOAD:
      return payload;

    // case PROJECT_REMOVE:
    //   return null;
    
    // TODO project update??

    default:
      return state;
  }
}