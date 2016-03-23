import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';
import Grid from 'components/portfolio/grid';

export default class LoyolaWorksView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
      <Section style={{ paddingTop: 0, paddingBottom: '1rem' }}>
        <div className="row">
          <div className="col col-l-2 col-s-12"></div>
          <div className="col col-l-10 col-s-12">
            <h1 className="page-title">Loyola University New Orleans</h1>
            <div className="text-tertiary">Selected undergraduate work from 2014 & 2015</div>
          </div>
        </div>
        <Grid images={[]} />
      </Section>
      </View>
    );
  }
}
