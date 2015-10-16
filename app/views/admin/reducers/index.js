import { combineReducers } from 'redux';

export default combineReducers({
  dashboard: require('./dashboard'),
  session: require('./session')
});
