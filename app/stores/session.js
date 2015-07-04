import { Store } from 'flummox';

export default class SessionStore extends Store {
  constructor() {
    super();
    this.state = {};
  }
}
