import { Actions } from 'flummox';

export default class SessionActions extends Actions {

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
