import { LOAD_START, LOAD_END, ERROR } from '../components/app/error-loading/reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {

  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  dispatch({ type: LOAD_START });

  return payload
    .then(
      result => {
        dispatch({
          type,
          payload: result
        });

        dispatch({ type: LOAD_END });
        return result;
      },
      err => {
        dispatch({ type: LOAD_END });
        dispatch({ type: ERROR, payload: err });
        throw err;
      }
    );
};