var Marty = require('marty');
var Firebase = require('firebase');
var Constants = require('../constants/user');

var Store = Marty.createStore({
  name: 'session',
  displayName: 'Session',
  handlers: {
    create: Constants.SESSION_CREATE,
    terminate: Constants.SESSION_TERMINATE
  },
  getInitialState: function () {
    return {
      token: undefined,
      uid: undefined,
      reference: new Firebase('https://pburtchaell-1.firebaseio.com/data/users');
    };
  }

});

module.exports = Store;
