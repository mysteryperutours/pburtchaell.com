// @flow
import React, { Element } from 'react';
import Column from '../../components/column';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import RouteContainer from '../../components/routeContainer';

const AboutRoute = (): Element<*> => (
  <RouteContainer>
    <Row>
      <Text
        type={types.HEADER_1}
        style={{
          marginTop: '1rem',
          marginBottom: '3rem'
        }}
      >Patrick Burtchaell is a product design intern at Facebook, studying design at Loyola University New Orleans.</Text>
    </Row>
    <Row>
      <Column size={9}>
        <Text key="1">Currently, Patrick is studying a B.S. in Design with Honors and expects to graduate in 2018. In 2016, he worked at Facebook in Menlo Park, California as a product design intern. He will return  to Facebook in 2017.</Text>
        <Text key="2">Previously, patrick has worked with startups around the world as a  software developer and designer. He is a cofounder and partner at Lawn Chair, a design and software development studio he founded in 2015.</Text>
      </Column>
    </Row>
    <Row>
      <Column size={12}>
        <ul className="about-links-list">
          <li key="twitter" className="about-links-list-item">
            <a href="https://twitter.com/pburtchaell" title="Patrick Burtchaell on Twitter">Twitter</a>
          </li>
          <li key="dribbble" className="about-links-list-item">
            <a href="https://dribbble.com/pburtchaell" title="Patrick Burtchaell on Dribbble">Dribbble</a>
          </li>
          <li key="email" className="about-links-list-item">
            <a href="mailto:patrick@pburtchaell.com" title="Patrick Burtchaell on email">patrick@pburtchaell.com</a>
          </li>
        </ul>
      </Column>
    </Row>
  </RouteContainer>
);

export default AboutRoute;
