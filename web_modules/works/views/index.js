import React from 'react';
import { RouteHandler } from 'react-router';
import View from 'works/components/view';

export default class IndexView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RouteHandler />
    );
  }

};
