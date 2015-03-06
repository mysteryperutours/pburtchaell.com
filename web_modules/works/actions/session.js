import { Action } from 'flummox';
import Firebase from 'firebase';

export default class SessionActions extends Action {

  constructor(flux) {
    super();
    this.reference = new Firebase('http://pburtchaell.firebaseio.com/data/session/');
  }

  /**
   * @function createSession
   * @description Create a new session for a user.
   * @param {string} username
   * @param {string} password
   */
  createSession(username, password) {
    let response = this.reference.login(username, password);
    return sid;
  }

  /**
   * @function terminateSession
   * @description Terminate the current session.
   */
  terminateSession() {
    return true;
  }

}
