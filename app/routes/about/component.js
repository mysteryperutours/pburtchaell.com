// @flow
import React, { Element } from 'react';
import Column from '../../components/column';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import SocialLinks from '../../components/socialLinks';
import RouteContainer from '../../components/routeContainer';
import './styles.css';

const AboutRoute = (props): Element<*> => (
  <RouteContainer {...props.route.config}>
    <Row>
      <Column size={9}>
        <Text>Currently, Patrick attends Loyola University New Orleans studying a Bachelor of Science in Design with Honors and expects to graduate in 2018.</Text>
        <Text>Patrick has worked with startups around the world as a  software developer and designer. He is a cofounder and partner at Lawn Chair, a design and software development studio he founded in 2015.</Text>
      </Column>
    </Row>
    <Row>
      <Column size={6}>
        <SocialLinks />
      </Column>
    </Row>
  </RouteContainer>
);

export default AboutRoute;
