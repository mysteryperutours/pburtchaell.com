import { Flummox } from 'flummox';

import ProjectActions from 'works/actions/project';
import SessionActions from 'works/actions/session';
import UserActions from 'works/actions/user';
import ProjectStores from 'works/stores/project';
import SessionStores from 'works/stores/session';
import UserStores from 'works/stores/users';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('project', ProjectActions);
    this.createActions('session', SessionActions);
    this.createActions('user', UserActions);
    this.createStore('project', ProjectStore, this);
    this.createStore('session', SessionStore, this);
    this.createStore('users', UsersStore, this);
  }
}
