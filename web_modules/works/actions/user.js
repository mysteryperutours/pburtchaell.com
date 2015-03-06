import { Action } from 'flummox';
import Firebase from 'firebase';

export default class UserActions extends Action {

  constructor(flux) {
    super();
    this.reference = new Firebase('http://pburtchaell.firebaseio.com/data/users/');
  }

  /**
   * @function createUser
   * @description Create a new user.
   * @param {string} username
   * @param {string} password
   */
  createUser(username, email, password) {
    let response = serverCreateUser(username, email, password);
    return response.body;
  }

  /**
   * @function updateUser
   * @description Update user data.
   */
  updateUser(username, email, password) {
    let response = serverUpdateUSer(username, email, password);
    return response.body;
  }

  deleteUser(username, password) {
    let response = serverDeleteUser(username, password);
    return response.body;
  }

}
