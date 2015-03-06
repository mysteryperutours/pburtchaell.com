import { Store } from 'flummox';

export default class UsersStore extends Store {

  constructor(flux) {

    super();

    let actions = flux.getActions('user');

    this.register(actions.createUser, this.handleNewUser);
    this.register(actions.updateUser, this.handleUpdateUser);
    this.register(actions.deleteUser, this.handleDeleteUser);

    /**
     * @object context#defaults
     * @description Default state.
     */
    this.defaults = {
      users: [] // application users
    };

    /**
     * @object context#state
     * @description The initial state of the store. Flux will attempt
     * to check localStorage for a persistent store, but if one does
     * not exist, it will use the defaults.
     */
    this.state = JSON.parse(localStorage.getItem('users')) || this.defaults;

  }

  handleNewUser(response) {
    this.setState({
      users: []
    });
  }

}
