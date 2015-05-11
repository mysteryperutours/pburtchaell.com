import React from 'react';
import Input from 'react-input';
import View from 'works/components/view';

export default class SignInView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @private
   * @function handleFormSubmission
   * @description Attempt to sign in.
   */
  handleFormSubmission(event) {
    event.preventDefault();
    let username = this.email.value();
    let password = this.password.value();
  }

  componentDidMount() {
    this.email.focus();
  }

  render() {
    return (
      <View>
        <main className="page-flex page-full-height page-full-width">
          <div className="panel panel-login">
           <div className="row">
              <div className="col col-l-12 col-s-12">
                <h1>Sign In</h1>
                <Input
                  ref={(c) => this.email = c}
                  type="text"
                  placeholder="Email"
                  />
                <Input
                  ref={(c) => this.password = c}
                  type="password"
                  placeholder="Password"
                  />
                <button className="btn" onClick={this.handleFormSubmission}>Submit</button>
              </div>
            </div>
          </div>
        </main>
      </View>
    );
  }

};

