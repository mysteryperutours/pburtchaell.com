import React from 'react';
import Input from 'react-input';
import Router from 'react-router';
import Marty from 'marty';

import SessionStore from 'works/stores/session';
import SessionActionCreators from 'works/actions/session';
//import UserStore from 'works/stores/user';
//import UserActionCreations from 'works/actions/user';

let {
  Link,
  Redirect,
  Navigation
} = Router;

let SigninView = React.createClass({

  mixins: [Router.Navigation],

  _submit(event) {

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

  componentWillMount() {},

  componentDidMount() {
    this.refs.email.focus();
  },

  getInitialState() {
    return {
      email: undefined,
      password: undefined,
      passwordError: null,
      emailError: null
    };
  },

  render() {
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
    );
  }

});

export default SigninView;
