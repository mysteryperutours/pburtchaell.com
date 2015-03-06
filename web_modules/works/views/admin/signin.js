import React from 'react';
import Input from 'react-input';
import Router from 'react-router';

var SignInView = React.createClass({

  /**
   * @private
   * @function submit
   * @description Attempt to sign in.
   */
  _submit(event) {

    event.preventDefault();

    let username = this.refs.email.value();
    let password = this.refs.password.value();

    console.log(username, password);

  },

  componentDidMount() {
    this.refs.email.focus();
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
            </div>
          </div>
        </div>
      </main>
    );
  }

});

export default SignInView;
