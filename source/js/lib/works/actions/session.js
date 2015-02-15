import Marty from 'marty';
import Constants from '../constants/session';
import Analytics from '../utils/analytics';

let Actions = Marty.createActionCreators({

  create: Constants.SESSION_CREATE(function (data, callbacl) {
    this.dispatch(data, callback);
    Analytics.identify('User logged in', {});
  }),

  terminate: Constants.SESSION_TERMINATE(function (uid) {
    this.dispatch(email);
  })

});

export default Actions;
