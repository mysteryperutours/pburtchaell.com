import Marty from 'marty';
import Constants from '../constants/project';

let Store = Marty.createStore({

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
      expires: undefined,
      //reference:  new Firebase('https://pburtchaell-1.firebaseio.com/data/sessions')
    };
  },

  /**
   * @function create
   * @description Create a new session for the user.
   * @param {string} email
   * @param {string} password
   * @param {function} callback
   */
  create(email, password, callback) {

    /**
     * @function callback
     * @param {string} error An error message.
     * @param {object} data The authentication payload data.
     */
    this.callback = callback || function () {};

    /**
     * @function authWithPassword
     * @description Authenticate the user using their password and email.
     * @param {object} authentication
     * @param {function}
     */
    this.state.reference.authWithPassword({
      email: email,
      password: password
    }, function (error, data) {

      if (!error) {
        this.callback(null, data);
        return;
      } else {
        this.setState({
          uid: data.uid,
          token: data.token,
          expires: data.expires
        });
        this.callback(error, null);
        return;
      }

    }.bind(this));

    return;

  },

  /**
   * @function terminate
   * @description Terminate the current session.
   */
  terminate(callback) {

    // Remove authentication
    this.state.reference.unauth();

    // Clear localStorage
    localStorage.clear();

    // Run the callback, if it exists
    if (callback) callback();

    return; // done

  }

});

export default Store;
