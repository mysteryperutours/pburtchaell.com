import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Head extends Component {
  static defaultProps = {
    title: null,
    keywords: 'web, graphic, interactive, design, print, new orleans',
    description: null,
    url: null
  }

  render() {
    return (
      <Helmet
        title={this.props.title === false ? '' : this.props.title}
        titleTemplate={this.props.title === false ? 'Patrick Burtchaell' : 'Patrick Burtchaell - %s'}
        meta={[
          {
            name: 'description',
            content: this.props.description
          },
          {
            name: 'keywords',
            content: this.props.keywords
          },
          {
            property: 'theme-color',
            content: '#ffffff'
          }
        ]}
        link={[
          {
            rel: 'canonical',
            href: ''
          },
          {
            rel: 'icon',
            href: '',
            size: '16x16'
          },
          {
            rel: 'icon',
            href: '',
            size: '32x32'
          },
          {
            rel: 'icon',
            href: '',
            size: '48x48'
          },
          {
            rel: 'icon',
            href: '',
            size: '64x64'
          },
          {
            rel: 'icon',
            href: '',
            size: '128x128'
          },
          {
            rel: 'icon',
            href: '',
            size: '192x192'
          }
        ]}
      />
    );
  }
}
