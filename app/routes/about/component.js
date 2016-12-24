// @flow
import React, { Element } from 'react';
import RouteContainer from '../../components/routeContainer';

const AboutRoute = (): Element<*> => (
  <RouteContainer header={false}>
    <div>
      About
    </div>
  </RouteContainer>
);

export default AboutRoute;
