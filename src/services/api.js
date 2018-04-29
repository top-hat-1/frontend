import { get, post /*, del, put*/ } from './request';

const URL = '/api';
const PROJECTS_URL = `${URL}/projects`;

export const getProjects = () => get(PROJECTS_URL);
export const postProject = data => post(PROJECTS_URL, data);