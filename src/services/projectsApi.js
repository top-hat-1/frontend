
const URL = '/api';
const PROJECTS_URL = `${URL}/projects`;

function loadProjects() {
  return fetch(URL)
    .then(r => r.json());
}

function addProject(project) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'content-type': 'application/json'
    },
  }).then(r => r.json());
}

function updateProject(project) {
  return fetch(`${URL}/${project._id}`, {
    method: 'PUT',
    body: JSON.stringify(project),
    headers: {
      'content-type': 'application/json'
    }
  }).then(r => r.json());
}

function removeProject(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  }).then(r => r.json());
}

// TODO: addMoment, removeMoment, updateMoment, addComment, removeComment, 
// Check these requests/routes... can we add auth information into the header, do we need additional information in the body for some of these? 

export default {
  loadProjects,
  addProject,
  updateProject,
  removeProject
};