var Marty = require('marty');
var Constants = require('../constants/session');
var Analytics = require('../utils/analytics');

module.exports = Marty.createActionCreators({

  create: Constants.SESSION_CREATE(function (data, callbacl) {
    this.dispatch(data, callback);
    Analytics.identify('User logged in', {});
  }),

  terminate: Constants.SESSION_TERMINATE(function (uid) {
    this.dispatch(email);
  })

});