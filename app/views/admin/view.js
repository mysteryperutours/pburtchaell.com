import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Section } from 'components/layout';
import { Input, Field, Submit } from 'react-input';
import { article } from 'actions';

@connect(state => ({
  article: state.article
}))
export default class AdminView extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.store.dispatch(article.create({
      title: this.refs.title.value,
      permalink: this.refs.permalink.value,
      description: this.refs.description.value,
      keywords: this.refs.keywords.value,
      body: this.refs.body.value,
      publishYear: this.refs.year.value,
      publishMonth: this.refs.month.value,
      publishDay: this.refs.day.value
    }));
  }

  render() {
    return (
      <View>
        <Section>
          <h1>Admin</h1>
          <form onSubmit={::this.handleSubmit} className="pure-form">
            <Field>
              <Input
                required
                className="pure-input-1"
                ref="title"
                type="text"
                placeholder="Title"
              />
            </Field>
            <Field>
              <Input
                required
                className="pure-input-1"
                ref="keywords"
                type="text"
                placeholder="Keywords"
              />
            </Field>
            <Field>
              <Input
                required
                className="pure-input-1"
                ref="description"
                type="text"
                placeholder="Description"
              />
            </Field>
            <Field>
              <Input
                required
                className="pure-input-1"
                ref="permalink"
                type="text"
                placeholder="Permalink"
              />
            </Field>
            <Field>
              <Input
                required
                className="pure-input-2"
                ref="year"
                type="text"
                placeholder="Year"
              />
              <Input
                required
                className="pure-input-2"
                ref="month"
                type="text"
                placeholder="Month"
              />
              <Input
                required
                className="pure-input-2"
                ref="day"
                type="text"
                placeholder="Day"
              />
            </Field>
            <Field>
              <Input
                required
                className="pure-input-1"
                ref="body"
                type="textarea"
                placeholder="Body"
              />
            </Field>
            <button type="submit">Submit</button>
          </form>
        </Section>
      </View>
    );
  }
}
