// @flow
import React, { Element } from 'react';
import RouteContainer from '../../components/routeContainer';

const NotFoundRoute = (): Element<*> => (
  <RouteContainer header={false}>
    Error
  </RouteContainer>
);

export default NotFoundRoute;
