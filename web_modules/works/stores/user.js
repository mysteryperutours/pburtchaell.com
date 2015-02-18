import Marty from 'marty';
import Constants from 'works/constants/project';

let Store  = Marty.createStore({

  name: 'session',

  displayName: 'Session',

  handlers: {
    create: Constants.SESSION_CREATE,
    terminate: Constants.SESSION_TERMINATE
  },

  getInitialState() {
    return {
      token: undefined,
      uid: undefined,
      //reference: new Firebase('https://pburtchaell-1.firebaseio.com/data/users')
    };
  }

});

export default Store;
