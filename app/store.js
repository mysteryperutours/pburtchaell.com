import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {};
const reducer = combineReducers(reducers);

let composeStoreWithMiddleware;

if (DEV_TOOLS === true) {
  const { devTools, persistState } = require('redux-devtools');

  composeStoreWithMiddleware = compose(
    applyMiddleware(
      promiseMiddleware
    ),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
  )(createStore);
}

export default composeStoreWithMiddleware(reducer, initialState);
