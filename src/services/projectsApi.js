const URL = '/api';
const PROJECTS_URL = `${URL}/projects`;
const AUTH_URL = `${URL}/auth`;

const headers = {
  'content-type': 'application/json',
};

function addTokenToRequest(token){
  headers.Authorization = token;
  return headers;
}

function loadProjects() {
  return fetch(PROJECTS_URL)
    .then(r => r.json());
}

//TODO: add load project? 

function sendProject(project, token) {
  const newHeaders = addTokenToRequest(token);
  return fetch(PROJECTS_URL, {
    method: 'POST',
    body: JSON.stringify(project),
    newHeaders
  }).then(r => r.json());
}

function loadMoments(projectId) {
  return fetch(`${PROJECTS_URL}/${projectId}`)
    .then(r => r.json());
}

function sendMoment(moment, projectId){
  return fetch(`${PROJECTS_URL}/${projectId}`, {
    method: 'POST',
    body: JSON.stringify(moment)
  })
    .then(r => r.json());
}

function sendMomentUpdate(moment) {
  return fetch(`${PROJECTS_URL}/${moment.projectId}/${moment._id}`, {  // PATH MAY NEED ATTENTION!
    method: 'PUT',
    body: JSON.stringify(moment)
  }).then(r => r.json()); 
}

function sendMomentRemove(momentId, projectId) {
  return fetch(`${PROJECTS_URL}/${projectId}/${momentId}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

function signup(user) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers
  }).then(r => r.json());
}

function signin(user) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers
  }).then(r => r.json());
}

function updateProject(project) {
  return fetch(`${PROJECTS_URL}/${project._id}`, {
    method: 'PUT',
    body: JSON.stringify(project),
    headers
  }).then(r => r.json());
}

function removeProject(id) {
  return fetch(`${PROJECTS_URL}/${id}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

// TODO: addMoment, removeMoment, updateMoment, addComment, removeComment, 
// Check these requests/routes... can we add auth information into the header, do we need additional information in the body for some of these? 

export default {
  loadProjects,
  sendProject,
  updateProject,
  removeProject,
  loadMoments,
  sendMoment,
  sendMomentUpdate,
  sendMomentRemove,
  signup,
  signin
};