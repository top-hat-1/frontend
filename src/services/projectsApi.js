const URL = '/api';
const PROJECTS_URL = `${URL}/projects`;
const AUTH_URL = `${URL}/auth`;

const headers = {
  'content-type': 'application/json',
  'Authorization': localStorage.getItem('token')
};

function loadProjects() {
  return fetch(PROJECTS_URL, {
    method: 'GET',
    headers
  })
    .then(r => r.json());
}

function loadProject(id) {
  return fetch(`${PROJECTS_URL}/${id}/moments`, {
    method: 'GET',
    headers
  })
    .then(r => r.json());
}

function sendProject(project) {
  return fetch(PROJECTS_URL, {
    method: 'POST',
    body: JSON.stringify(project),
    headers
  }).then(r => r.json());
}

function loadMoments(projectId) {
  return fetch(`${PROJECTS_URL}/${projectId}/moments`)
    .then(r => r.json());
}

function sendMoment(moment){
  return fetch(`${URL}/moments`, {
    method: 'POST',
    body: JSON.stringify(moment),
    headers 
  })
    .then(r => r.json());
}

function sendMomentUpdate(moment) {
  return fetch(`${URL}/moments/${moment._id}`, {  
    method: 'PUT',
    body: JSON.stringify(moment)
  }).then(r => r.json()); 
}

function sendMomentRemove(momentId) { // TODO: Will need to send the whole object OR owner... investigate
  return fetch(`${URL}/moments/${momentId}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

function sendComment(comment) {
  return fetch(`${PROJECTS_URL}/${comment.target}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers 
  })
    .then(r => r.json());
}

function loadComments(projectId) {
  return fetch(`${PROJECTS_URL}/${projectId}/comments`)
    .then(r => r.json());
}

function sendRemoveComment(id) {
  return fetch(`${URL}/comments/${id}`, {
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

// TODO: addComment, removeComment, 
// Check these requests/routes... can we add auth information into the header, do we need additional information in the body for some of these? 

export default {
  loadProjects,
  loadProject,
  sendProject,
  updateProject,
  removeProject,
  loadMoments,
  sendMoment,
  sendMomentUpdate,
  sendMomentRemove,
  sendComment,
  sendRemoveComment,
  loadComments,
  signup,
  signin
};