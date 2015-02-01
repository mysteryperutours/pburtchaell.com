var Dispatcher = require('marty/dispatcher');

var dispatchToken = Dispatcher.register(function (action) {
  debugger;
  console.log(action);
});

module.exports = dispatchToken;
