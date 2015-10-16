import { createStore, applyMiddleware } from 'redux';
import configureStore from '../../utils/configureStore';

export default configureStore(
  applyMiddleware(
    require('../../shared/middleware/promise')
  )(createStore),
  require('./reducers'),
  './reducers'
);
