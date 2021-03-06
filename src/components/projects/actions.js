import { PROJECTS_LOAD, PROJECT_LOAD, PROJECT_ADD, PROJECT_REMOVE, PROJECT_UPDATE } from './reducers';
import projectsApi from '../../services/projectsApi';

export function projectsLoad(userId = null) {
  return dispatch => {
    return projectsApi.loadProjects(userId)
      .then(projects => {
        dispatch({
          type: PROJECTS_LOAD,
          payload: projects
        });
      });
  };
}

export function projectLoad(id) {
  return dispatch => {
    return projectsApi.loadProject(id)
      .then(project => {
        dispatch({
          type: PROJECT_LOAD,
          payload: project
        });
      });
  };
}

export function addProject(project) {
  return  {
    type: PROJECT_ADD,
    payload: projectsApi.sendProject(project)
  };
}

export function updateProject(project) {
  return dispatch => {
    return projectsApi.updateProject(project)
      .then(project => {
        dispatch({
          type: PROJECT_UPDATE,
          payload: project
        });
      });
  };
}

export function removeProject(id) {
  return dispatch => {
    return projectsApi.removeProject(id)
      .then(() => {
        dispatch({
          type: PROJECT_REMOVE,
          payload: id
        });
      });
  };
}