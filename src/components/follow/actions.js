import { FOLLOW_ADD } from './reducers';
import apiFunctions from '../../services/projectsApi';

export function addToFollowing(followId, userId) {
  return dispatch => {
    return apiFunctions.addFollow(followId, userId)  
      .then(id => {
        dispatch({
          type: FOLLOW_ADD,
          payload: id
        });
      });
  };
}

// export function getFollowing(id) {
//   return dispatch => {
//     return apiFunctions.getfollowing(id)
//       .then(id => {
//         dispatch({
//           type: 
//         })
//       })
//   }
// }