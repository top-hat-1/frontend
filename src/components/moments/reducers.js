export const MOMENT_ADD = 'MOMENT_ADD';
export const MOMENT_REMOVE = 'MOMENT_REMOVE';
export const MOMENTS_LOAD = 'MOMENTS_LOAD';
export const MOMENT_LOAD = 'MOMENT_LOAD';
export const MOMENT_UPDATE = 'MOMENT_UPDATE';

export function moments(state = [], { type, payload }) {
  switch(type) {
    case MOMENTS_LOAD:
      return payload;

    case MOMENT_ADD:
      return [...state, payload];
    
    case MOMENT_REMOVE:
      return state.filter(m => m._id !== payload);

    case MOMENT_UPDATE: {
      const index = state.findIndex(m => m._id === payload._id); 
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
export function moment(state = [], { type, payload }) {
  switch(type) {

    case MOMENT_LOAD:
      return payload;

    case MOMENT_REMOVE:
      return null;
    
    default:
      return state;
  }
}