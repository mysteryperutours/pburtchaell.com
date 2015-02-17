import Dispatcher from 'marty/dispatcher';

let dispatchToken = Dispatcher.register(function (action) {
  debugger;
  console.log(action);
});

export default dispatchToken;
