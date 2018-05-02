import { COMMENTS_LOAD, COMMENT_ADD, COMMENT_REMOVE } from './reducers';
import projectsApi from '../../services/projectsApi';

export function commentsLoad(projectId) {
  return dispatch => {
    return projectsApi.loadComments(projectId)
      .then(comments => {
        dispatch({
          type: COMMENTS_LOAD,
          payload: comments
        });
      });
  };
}

export function addComment(comment) {
  return {
    type: COMMENT_ADD,
    payload: projectsApi.sendComment(comment)
  };
}

export function removeComment(id) {
  return dispatch => {
    return projectsApi.sendRemoveComment(id)
      .then(() => {
        dispatch({
          type: COMMENT_REMOVE,
          payload: id
        });
      });
  };
}