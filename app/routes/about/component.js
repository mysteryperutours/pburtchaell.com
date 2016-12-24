// @flow
import React, { Element } from 'react';
import RouteContainer from '../../components/routeContainer';

const AboutRoute = (): Element<*> => (
  <RouteContainer header={false}>
    <div>
      My name is Patrick, lol at you
    </div>
  </RouteContainer>
);

export default AboutRoute;
