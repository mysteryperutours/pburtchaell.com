/** @jsx React.DOM */

var React = require('react');
var Input = require('react-input');

var SessionStore = require('../../stores/session');
var SessionActionCreators = require('../../actions/session');
//var UserStore = require('../stores/user');
//var UserActionCreations = require('../actions/user');

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

  componentDidMount: function () {
    this.refs.email.focus();
  },

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
      <main className="page-flex page-full-height page-full-width">
        <div className="panel panel-login">
         <div className="row">
            <div className="col col-l-12 col-s-12">
              <h1>Sign In</h1>
              <Input
                ref="email"
                type="text"
                placeholder="Email"
                />
              <Input
                ref="password"
                type="password"
                placeholder="Password"
                />
              <button className="btn" onClick={this._submit}>Submit</button>
              {/*<Link to="app"><strong><small>Go back</small></strong></Link>*/}
            </div>
          </div>
        </div>
      </main>
    )
  }
});

module.exports = SigninView;
