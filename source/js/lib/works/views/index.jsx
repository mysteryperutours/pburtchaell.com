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

  getInitialState: function () {
    return {
      title: 'Patrick Burtchaell',
      subtitle: 'Designer & developer from New Orleans'
    };
  },

  componentDidMount: function () {},

  render: function () {
    return (
      <div>
        <main>
          <RouteHandler />
        </main>
      </div>
    );
  }

});

module.exports = IndexView;
