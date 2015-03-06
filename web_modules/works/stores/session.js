import { Store } from 'flummox';

export default class SessionStore extends Store {

  constructor(flux) {

    super();

    let actions = flux.getActions('session');

    this.register(actions.createSession, this.handleNewSession);
    this.register(actions.TerminateSesssion, this.handleTerminateSession);

    /**
     * @object context#defaults
     * @description Default state.
     */
    this.defaults = {
      USER_ID: null, // unique user ID
      SESSION_ID: null, // unique session ID
      ACCESS_TOKEN: null, // access token for limiting scope
      scopes: [] // scopes the user has access to
    };

    /**
     * @object context#state
     * @description The initial state of the store. Flux will attempt
     * to check localStorage for a persistent store, but if one does
     * not exist, it will use the defaults.
     */
    this.state = JSON.parse(localStorage.getItem('session')) || this.defaults;

  }

  handleNewSession(response) {
    this.setState({
      USER_ID: response.USER_ID,
      SESSION_ID: response.SESSION_ID,
      ACCESS_TOKEN: response.ACCESS_TOKEN
    });
  }

  handleRefreshSession() {
    // refresh the SESSION_ID
  }

  handleTerminateSession() {
    this.setState(this.defaults);
  }

}
