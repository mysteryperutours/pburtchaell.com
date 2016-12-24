// @flow
import React, { Component, Element } from 'react';
import RouteContainer from '../../components/routeContainer';

type Props = {
  children: Element<*>
}

class IndexRoute extends Component {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = {
      foo: 'bar'
    };
  }

  state: {
    foo: 'foo' | 'bar'
  };

  props: Props;

  render() {
    return (
      <RouteContainer header={false}>
        Hello, world!
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
