// @flow
import React, { Element } from 'react';
import RouteContainer from '../../components/routeContainer';

const NotFoundRoute = (): Element<*> => (
  <RouteContainer header={false}>
    <div>This is an error, oh no</div>
  </RouteContainer>
);

export default NotFoundRoute;
