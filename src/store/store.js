import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { loading, error } from '../components/app/error-loading/reducers';
import { projects, project } from '../components/projects/reducers';
import { imageAdd, auth } from '../components/forms/reducers';
import { moments } from '../components/moments/reducers';
import { comments } from '../components/comments/reducers';
import { addUserToState } from '../components/app/reducers';
import { following } from '../components/follow/reducers';

const reducer = combineReducers({
  loading,
  error,
  projects,
  project,
  imageAdd,
  auth,
  moments,
  comments,
  addUserToState,
  following
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;