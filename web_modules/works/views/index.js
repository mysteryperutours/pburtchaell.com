import React from 'react';
import { State } from 'react-router';
import View from 'works/components/view';

let {
  RouteHandler
} = Router;

let IndexView = React.createClass({
  render() {
    return (
      <RouteHandler />
    );
  }
});

export default IndexView;
