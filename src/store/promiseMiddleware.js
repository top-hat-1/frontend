import { LOAD_Start, LOAD_end, ERROR } from '../components/app/errorloading/reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispatch }) => next => action => {

  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  dispatch({ type: LOAD_START });

  return payload
    .then(
      result => {
        dipatch({
          type,
          payload: result
        });

        dispatch({ type: LOAD_END });
      },
      err => {
        dispatch({ type: LOAD_END });
        dispatch({ type: ERROR, payload: err });
        throw err;
      }
    );
};