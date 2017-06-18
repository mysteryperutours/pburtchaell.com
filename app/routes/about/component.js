import React, { Element, Children } from 'react';
import { Link } from 'react-router-dom';
import Column from '../../components/column';
import Text, { types as textTypes } from '../../components/text';
import Row from '../../components/row';
import HireMe from '../../components/hire';
import SocialLinks from '../../components/socialLinks';
import RouteContainer from '../../components/routeContainer';
import googleAnalyticsEvents from '../../support/googleAnalyticsEvents';
import googleAnalyticsCategories from '../../support/googleAnalyticsCategories';
import content from './content.json';

type Props = {
  config: Object
};

const AboutRoute = (props: Props): Element<*> => (
  <RouteContainer {...props.config}>
    <Row>
      <Text style={{
        marginTop: '0'
      }}>{"I'm"} a senior student at Loyola University New Orleans and a product design intern at Facebook.</Text>
    </Row>
    <Row size="medium">
      <figure className="figure">
        <img
          className="image image-large"
          src={require('./hero.jpg')}
        />
      </figure>
    </Row>
    <Row>
      {Children.toArray(content.intro.map(paragraph => (
        <Text>{paragraph}</Text>
      )))}
      <hr />
      <Text type={textTypes.SMALL}>
        Last Updated &mdash; {content.lastUpdated}
      </Text>
    </Row>
    <div className="padding padding-small" />
    <Row size="large">
      <Column largeSize={6} smallSize={12}>
        <h3>Clients &amp; Companies</h3>
        <ul>
          {Children.toArray(content.companies.map(company => (
            <li>{company}</li>
          )))}
        </ul>
      </Column>
      <Column largeSize={6} smallSize={12}>
        <h3>Personal Projects</h3>
        <ul>
          {Children.toArray(content.personalProjects.map(project => (
            <li>
              <a
                href={project.path}
                target="_blank"
                title={project.title}
                onClick={() => ga(
                  'send',
                  'event',
                  googleAnalyticsCategories.BUTTONS,
                  googleAnalyticsEvents.OUTBOUND_PROJECT_LINK_FROM_PROFILE,
                  project.title
                )}
              >
                {project.title}
              </a>
            </li>
          )))}
        </ul>
      </Column>
      <Column largeSize={6} smallSize={12}>
        <h3>Connect</h3>
        <SocialLinks />
      </Column>
      <Column largeSize={6} smallSize={12}>
        <h3>Open Source Projects</h3>
        <ul>
          {Children.toArray(content.openSourceProjects.map(project => (
            <li>
              <a
                href={project.path}
                title={project.title}
                target="_blank"
                onClick={() => ga(
                  'send',
                  'event',
                  googleAnalyticsCategories.BUTTONS,
                  googleAnalyticsEvents.OUTBOUND_PROJECT_LINK_FROM_PROFILE,
                  project.title
                )}
              >
                {project.title}
              </a>
            </li>
          )))}
        </ul>
      </Column>
    </Row>
    <Row size="large">
      <HireMe />
    </Row>
  </RouteContainer>
);

export default AboutRoute;
