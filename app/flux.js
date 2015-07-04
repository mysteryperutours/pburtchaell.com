import { Flummox } from 'flummox';
import SessionActions from './actions/session';
import SessionStore from './stores/session';

class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('session', SessionActions);
    this.createStore('session', SessionStore, this);
  }
}

export default new Flux();
