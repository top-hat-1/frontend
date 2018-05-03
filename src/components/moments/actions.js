import { MOMENTS_LOAD, MOMENT_ADD, MOMENT_REMOVE, MOMENT_UPDATE, MOMENT_LOAD } from './reducers';
import projectsApi from '../../services/projectsApi';

export function momentsLoad(projectId) {
  return dispatch => {
    return projectsApi.loadMoments(projectId)  
      .then(moments => {
        dispatch({
          type: MOMENTS_LOAD,
          payload: moments
        });
      });
  };
}

export function addMoment(moment) {
  return {
    type: MOMENT_ADD,
    payload: projectsApi.sendMoment(moment) 
  };
}

export function updateMoment(moment) {
  return dispatch => {
    return projectsApi.sendMomentUpdate(moment) 
      .then(moment => {
        dispatch({
          type: MOMENT_UPDATE,
          PAYLOAD: moment
        });
      });
  };
}

export function removeMoment(id) {
  return dispatch => {
    return projectsApi.sendRemoveMoment(id)
      .then(() => {
        dispatch({
          type: MOMENT_REMOVE,
          payload: id
        });
      });
  };
}

export function momentLoad(id){
  return dispatch => {
    return projectsApi.loadMoment(id)
      .then(() => {
        dispatch({
          type: MOMENT_LOAD,
          payload: id
        });
      });
  };
}

