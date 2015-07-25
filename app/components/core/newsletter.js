import React, { Component } from 'react';
import { Field, Label, Input } from 'react-input';

export default class Newsletter extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange() {}

  render() {
    return (
      <form
        autocomplete="off"
        className="newsletter-form"
        onSubmit={::this.handleSubmit}>
        <Field className="newsletter-field" name="email" ref="email">
          <span className="newsletter-form">
            Sign up for my maining list:
          </span>
          <Input
            required
            className="newsletter-input"
            type="email"
            placeholder="Enter your email and press enter..."
            onChange={::this.handleChange}
          />
        </Field>
      </form>
    );
  }
}
