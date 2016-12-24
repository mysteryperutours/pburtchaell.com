// @flow
import React, { Component, Element } from 'react';
import RouteContainer from '../../components/routeContainer';
import Row from '../../components/row';
import Column from '../../components/column';
import Text from '../../components/text';
import Image from '../../components/image';

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
        <Row className="foo">
          <Column className="foo" size="1">
            <Text>
              Test
            </Text>
          </Column>
        </Row>
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
