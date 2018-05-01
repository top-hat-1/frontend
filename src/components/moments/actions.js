import { MOMENTS_LOAD, MOMENT_ADD, MOMENT_REMOVE, MOMENT_UPDATE } from './reducers';
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

//TODO: momentLoad

export function addMoment(moment) {
  return {
    type: MOMENT_ADD,
    payload: projectsApi.sendMoment(moment) //TODO: write sendMoment in api
  };
}

export function updateMoment(moment) {
  return dispatch => {
    return projectsApi.sendMomentUpdate(moment) // TODO: this one too
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

