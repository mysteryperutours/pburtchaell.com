import React, { Component } from 'react';
import { Link } from 'react-router';
import Section from 'components/layout/section';
import View from 'components/layout/view';

export default class ErrorView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section>
          <div className="row">
            <div className="col col-s-12 col-l-2">
              <h1
                className="page-title"
                style={{
                  top: '5px'
                }}
                children="404"
              ></h1>
            </div>
            <div className="col col-s-12 col-l-10">
              <span style={{
                fontSize: '3rem',
                lineHeight: '3rem',
              }}>The page you are looking for does not exist.</span>
              <div>
                <hr />
                <small><Link to="/">Just head on home.</Link></small>
              </div>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
