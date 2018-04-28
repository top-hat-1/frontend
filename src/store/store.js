import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import PromiseMiddleware from './promiseMiddleware';
// import { loading, error } from '../components/app/errorloading/reducers';
