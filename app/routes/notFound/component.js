// @flow
import React, { Element } from 'react';
import RouteContainer from '../../components/routeContainer';
import Row from '../../components/row';
import Text, { types } from '../../components/text';

const NotFoundRoute = (): Element<*> => (
  <RouteContainer>
    <Row>
      <Text type={types.HEADER_1}>Not Found</Text>
      <hr />
      <Text>Sorry, this page does not exist.</Text>
    </Row>
  </RouteContainer>
);

export default NotFoundRoute;
