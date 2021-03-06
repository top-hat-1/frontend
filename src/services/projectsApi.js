const URL = '/api';
const PROJECTS_URL = `${URL}/projects`;
const AUTH_URL = `${URL}/auth`;

const headers = {
  'content-type': 'application/json',
  'Authorization': localStorage.getItem('token')
};

function loadProjects(userId = null) {
  if(userId === null) { 
    return fetch(PROJECTS_URL, {
      method: 'GET',
      headers
    })
      .then(r => r.json());
  } else {
    return fetch(`${URL}/users/${userId}/projects`, {
      method: 'GET',
      headers
    })
      .then(r => r.json());
  }
}

function loadProject(id) {
  return fetch(`${PROJECTS_URL}/${id}`, {
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

function loadMoment(id) {
  return fetch(`${URL}/moments/${id}`, {
    method: 'GET',
    headers
  }).then(r => r.json());
}

function sendMoment(moment) {
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

function sendMomentRemove(momentId) { 
  return fetch(`${URL}/moments/${momentId}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

function sendComment(comment) {
  return fetch(`${URL}/comments`, {
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

function updateuser(image, hobbies, id) {
  return fetch(`${URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      photo: image,
      hobbies: hobbies,
      _id: id
    }),
    headers
  }).then(r => r.json());
}
    
function addFollow(followId, userId) {
  let toFollow = {};
  toFollow['_id'] = followId;
  return fetch(`${URL}/users/${userId}/following`, {
    method: 'POST',
    body: JSON.stringify(toFollow),
    headers
  }).then(r => r.json());
}

function getfollowing(id) {
  return fetch(`${URL}/users/${id}/following`, {
    method: 'GET',
    headers
  }).then(r => r.json());
}

function loaduser(id) {
  return fetch(`${URL}/users/${id}`, {
    method: 'GET',
    headers
  }).then(r => r.json());
}

export default {
  loadProjects,
  loadProject,
  sendProject,
  updateProject,
  removeProject,
  loadMoments,
  loadMoment,
  sendMoment,
  sendMomentUpdate,
  sendMomentRemove,
  sendComment,
  sendRemoveComment,
  loadComments,
  signup,
  signin,
  updateuser,
  addFollow,
  getfollowing,
  loaduser
};