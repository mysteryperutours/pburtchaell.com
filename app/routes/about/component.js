// @flow
import React, { Element } from 'react';
import { Link } from 'react-router-dom';
import Column from '../../components/column';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import SocialLinks from '../../components/socialLinks';
import RouteContainer from '../../components/routeContainer';
import './styles.css';

const AboutRoute = (props): Element<*> => (
  <RouteContainer {...props.config}>
    <Row>
      <Column largeSize={9} smallSize={12}>
        <Text>Currently, Patrick is a product design intern at Facebook in Menlo Park, CA. He attends Loyola University New Orleans, studying a Bachelor of Science in Design, Honors and a minor in Art History. He  expects to graduate in 2018.</Text>
        <Text>Patrick has worked with startups around the world as a designer and software developer. He is available for freelance gigs through Lawn Chair, an independent design and software development studio he founded in 2015.</Text>
        <hr />
        <Text style={{
          opacity: '.3'
        }}>
          <small>
            Last updated &mdash; February 2017
          </small>
        </Text>
      </Column>
    </Row>
    <Row defaultColumn={false}>
      <Column largeSize={4} smallSize={12}>
        <h5>Clients &amp; Companies</h5>
        <ul>
          <li>Facebook</li>
          <li>Filee</li>
          <li>Fixt</li>
          <li>Gigster</li>
          <li>Jefferson SPCA</li>
          <li>NewAperio</li>
        </ul>
      </Column>
      <Column largeSize={8} smallSize={12}>
        <h5>Personal Projects</h5>
        <ul>
          <li><Link to="/work/2015/08/segment">Segment</Link></li>
          <li><Link to="/work/2015/08/lawnchair">Lawn Chair Studios</Link></li>
        </ul>
      </Column>
      <Column largeSize={4} smallSize={12}>
        <h5>Connect</h5>
        <SocialLinks />
      </Column>
      <Column largeSize={8} smallSize={12}>
        <h5>Open Source Projects</h5>
        <ul>
          <li><Link to="https://github.com/pburtchaell/redux-promise-middleware">Redux Promise Middleware</Link></li>
          <li><Link to="https://github.com/pburtchaell/react-input">React Input</Link></li>
          <li><Link to="https://github.com/pburtchaell/react-notification">React Notification</Link></li>
        </ul>
      </Column>
    </Row>
  </RouteContainer>
);

export default AboutRoute;
