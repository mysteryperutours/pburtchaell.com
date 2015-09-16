import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
