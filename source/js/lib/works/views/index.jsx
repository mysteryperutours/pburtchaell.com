/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty');

var Router = require('react-router');
var LocalStorage = require('react-localstorage');
var RouteHandler = Router.RouteHandler;

var Session = {
  store: require('../stores/session'),
  action: require('../actions/session')
};

var Header = require('../components/header');
var Footer = require('../components/footer');

var IndexView  = React.createClass({

  mixins: [LocalStorage, Router.Navigation],

  /**
   * @function signOut
   * @description End the session
   */
  _signOut: function () {
    Session.action._terminate();
    this.transitionTo('projects');
    return;
  },

  /**
   * @function scroll
   */
  _scroll: function (event) {

    event.preventDefault();

    this.window = {
      height: window.innerHeight,
      width: window.innerWidth
    };

    //window.scroll(0, this.window.height);
    var el = document.body;
    smooth_scroll_to(el, el.scrollTop + this.window.height, 600);

  },

  /**
   * @private
   * @function ignoreWarning
   * @description Ignore the browser support warning message and enter 
   * the site.
   */
  _ignoreWarning: function (event) {
    event.preventDefault();
    this.setState({
      supported: true
    });
  },

  getInitialState: function () {
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
  componentWillMount: function () {
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

  render: function () {

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

module.exports = IndexView;
