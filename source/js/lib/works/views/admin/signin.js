signin.js/** @jsx React.DOM */

var React = require('react');
var SessionStore = require('../stores/session');
var SessionActionCreators = require('../actions/session');
var UserStore = require('../stores/user');
var UserActionCreations = require('../actions/user');

var ui = require('material-ui');
var Input = ui.Input;
var Button = ui.RaisedButton;

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var SigninView = React.createClass({

  mixins: [Router.Navigation],

  _submit: function (event) {

    event.preventDefault();

    this.setState({
      loading: true
    });

    var data = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
    };

    SessionActionCreators.create(data, function() {
      this.transitionTo('transactions');
      return true;
    }.bind(this), function (error) {
      if (error == 'INVALID_PASSWORD') {
        this.setState({
          passwordError: 'Invalid password',
          loading: false
        });
      } else if (error == 'INVALID_EMAIL') {
        this.setState({
          emailError: 'Invaild email',
          loading: false
        });
      }
    }.bind(this));
  
  },

  componentWillMount: function () {},

  componentDidMount: function () {},

  getInitialState: function () {
    return {
      email: undefined,
      password: undefined,
      passwordError: null,
      emailError: null
    }
  },

  render: function () {
    return (
      <main className="container">
        <div className="panel login">
          // ui code
        </div>
      </main>
    )
  }
});

module.exports = SigninView;
