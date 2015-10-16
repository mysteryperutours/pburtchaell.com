import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Section } from 'components/layout';
import { Input, Field, Submit } from 'react-input';
import { article } from 'actions';

export default class CreatePostForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const data = {
      title: this.refs.title.value,
      permalink: this.refs.permalink.value,
      description: this.refs.description.value,
      keywords: this.refs.keywords.value,
      body: this.refs.body.value,
      date: {
        year: this.refs.year.value,
        month: this.refs.month.value,
        day: this.refs.day.value
      }
    };

    this.props.onSubmit(data, event);
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <Field>
          <Input
            required
            ref="title"
            type="text"
            placeholder="Title"
          />
        </Field>
        <Field>
          <Input
            required
            ref="keywords"
            type="text"
            placeholder="Keywords"
          />
        </Field>
        <Field>
          <Input
            required
            ref="description"
            type="text"
            placeholder="Description"
          />
        </Field>
        <Field>
          <Input
            required
            ref="permalink"
            type="text"
            placeholder="Permalink"
          />
        </Field>
        <div className="row">
          <Field className="col col-l-4 col-s-12">
            <Input
              required
              ref="year"
              type="text"
              placeholder="Year"
            />
          </Field>
          <Field className="col col-l-4 col-s-12">
            <Input
              required
              ref="month"
              type="text"
              placeholder="Month"
            />
          </Field>
          <Field className="col col-l-4 col-s-12">
            <Input
              required
              ref="day"
              type="text"
              placeholder="Day"
            />
          </Field>
        </div>
        <Field>
          <Input
            required
            ref="body"
            type="textarea"
            placeholder="Body (Markdown Supported)"
          />
        </Field>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
