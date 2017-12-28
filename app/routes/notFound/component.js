import React, { Component } from 'react';
import RouteContainer from '../../components/routeContainer';
import Column from '../../components/column';
import Row from '../../components/row';
import Text, { types } from '../../components/text';

export default class NotFoundRoute extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <RouteContainer>
        <Row>
          <Column largeSize="8" smallSize="12">
            <Text type={types.HEADER_2}>Patrick Burtchaell</Text>
            <Text>Oh no! Sorry, but no page page there.</Text>
            <hr />
            <Text linkTo="/"><small>&#8592; Try here</small></Text>
          </Column>
        </Row>
      </RouteContainer>
    );
  }
}
