import React from 'react';
import Router from 'react-router';
import Marty from 'marty';

import Header from 'works/components/header';
import Footer from 'works/components/footer';

let {
  Link,
  Navigation,
  RouteHandler
} = Router;

const Session = {
  store: require('../stores/session'),
  action: require('../actions/session')
};

let IndexView  = React.createClass({

  mixins: [Router.Navigation],

  /**
   * @function signOut
   * @description End the session
   */
  _signOut() {
    Session.action._terminate();
    this.transitionTo('projects');
    return;
  },

  /**
   * @private
   * @function ignoreWarning
   * @description Ignore the browser support warning message and enter
   * the site.
   */
  _ignoreWarning(event) {
    event.preventDefault();
    this.setState({
      supported: true
    });
  },

  getInitialState() {
    return {
      title: 'Patrick Burtchaell',
      subtitle: 'Designer & developer from New Orleans',
      supported: undefined
    };
  },

  /**
   * Cut the mustard and check for browser support. If addEventListener
   * and the querySelector API's do not exist, then the browser is unsupported
   * and React will warn vistors.
   */
  componentWillMount() {
    if (!!window.addEventListener && !!document.querySelectorAll) {
      this.setState({
        supported: true
      });
    } else {
      this.setState({
        supported: false
      });
    }
  },

  render() {

    if (this.state.supported !== true) {
      return (
        <div className="view view-unsupported">
          <div className="unsupported-message">
            <h1>Sorry, your browser is unsupported.</h1>
            <small>This site uses advanced technology not supported by your current browser.</small><br />
            <small>If you continue, I can not guarrantee a perfect experience.</small>
            <button onClick={this._ignoreWarning}>Continue Anyway</button>
          </div>
        </div>
      );
    } else if (this.state.supported === true) {
      return (
        <div>
          <Header />
          <main>
            <RouteHandler />
          </main>
        </div>
      );
    }

  }

});

export default IndexView;
