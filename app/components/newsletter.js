import React from 'react';
import autobind from 'autobind-decorator';
import { Field, Label, Input } from 'react-input';

/**
 * @class
 * @description
 */
export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
  }

  @autobind
  handleSubmit(event) {
    event.preventDefault();

    try {
      analytics.indentify({
        email: this.state.email,
      });
    } catch (error) {
      this.setState({
        error: 'Sorry, but there was an issue signing up. Please refresh the page and try again.'
      });
    }
  }

  @autobind
  handleChange() {

  }

  render() {
    return (
      <form
        autocomplete="off"
        className="newsletter-form"
        onSubmit={this.handleSubmit}>
        <Field className="newsletter-field" name="email" ref="email">
          <span className="newsletter-form">
            Sign up for my maining list:
          </span>
          <Input
            required
            className="newsletter-input"
            type="email"
            placeholder="Enter your email and press enter..."
            onChange={this.handleChange.bind(null, 'email')}
          />
        </Field>
      </form>
    );
  }
}
