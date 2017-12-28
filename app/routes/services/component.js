import React, { Component } from 'react';
import RouteContainer from '../../components/routeContainer';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import HireMe from '../../components/hire';
import './style.css'

class ServicesRoute extends Component {
  render() {
    return (
      <RouteContainer {...this.props.config}>
        <Row size="large">
          <Column largeSize={6} smallSize={12}>
            <Text type={types.HEADER_2}>
              Services
            </Text>
          </Column>
        </Row>
        <Row size="large">
          <Column
            largeSize={6}
            smallSize={12}
            className="service"
          >
            <Text type={types.HEADER_1}>
              #1
            </Text>
            <Text type={types.HEADER_2}>
              Product Design
            </Text>
            <Text type={types.BODY}>
              Software products for web, iOS and Android, designed with toughtful user experience considerations and exceptional visual design.
            </Text>
          </Column>
          <Column
            largeSize={6}
            smallSize={12}
            className="service"
          >
            <Text type={types.HEADER_1}>
              #2
            </Text>
            <Text type={types.HEADER_2}>
              Custom Web Development
            </Text>
            <Text type={types.BODY}>
              Custom, cloud-based websites and web applications, designed and built to meet your business or team goals and user needs.
            </Text>
          </Column>
          <Column
            largeSize={6}
            smallSize={12}
            className="service"
          >
            <Text type={types.HEADER_1}>
              #3
            </Text>
            <Text type={types.HEADER_2}>
              Ecommerce
            </Text>
            <Text type={types.BODY}>
              Easy-to-maintain online stores built with Shopify, enabling your business to sell more and meet your goals.
            </Text>
          </Column>
        </Row>
        <div className="padding padding-large" />
        <Row size="large">
          <Column largeSize={12} smallSize={12}>
            <Text type={types.HEADER_2}>
              Web Development Stack
            </Text>
            <Text>
              {"Experienced with many tools, libraries and frameworks, I prefer to work with the following stack."}
            </Text>
            <ul className="tools">
              <li>React</li>
              <li>React Router</li>
              <li>Redux</li>
              <li>Redux Promise Middleware</li>
              <li>WebPack</li>
              <li>Babel</li>
              <li>npm</li>
              <li>Yarn</li>
              <li>Jest</li>
              <li>Mocha</li>
              <li>Segment</li>
              <li>Google Analytics</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Heroku</li>
              <li>Amazon Web Services</li>
            </ul>
          </Column>
        </Row>
        <div className="padding padding-large" />
        <Row size="large">
          <Column largeSize={12} smallSize={12}>
            <Text type={types.HEADER_2}>
              Design Stack
            </Text>
            <Text>
              {"For design projects, I work with the following tools."}
            </Text>
            <ul className="tools">
              <li>Sketch</li>
              <li>Framer Studio</li>
              <li>Origami Studio</li>
              <li>Adobe Creative Cloud</li>
            </ul>
          </Column>
        </Row>
      </RouteContainer>
    );
  }
}

ServicesRoute.propTypes = {};

export default ServicesRoute;
