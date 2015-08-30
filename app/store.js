import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {};
const reducer = combineReducers(reducers);

let composeStoreWithMiddleware;

composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

export default composeStoreWithMiddleware(reducer, initialState);
