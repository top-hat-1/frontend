import { PROJECTS_SAVE } from './reducers';

export function saveProjects(projects) {
  return {
    type: PROJECTS_SAVE,
    payload: projects
  };
}