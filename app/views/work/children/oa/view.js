import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';
import Grid from 'components/portfolio/grid';

export default class OAWorksView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12"></div>
            <div className="col col-l-10 col-s-12">
              <h1 className="page-title-no-float">Order of the Arrow, Boy Scouts of America</h1>
              <div className="text-tertiary">Selected works from 2013 & 2014</div>
            </div>
          </div>
        </Section>
        <Grid
          images={[
            'images/oa/oa-1',
            'images/oa/oa-2',
            'images/oa/oa-6',
            'images/oa/oa-3',
            'images/oa/oa-4',
            'images/oa/oa-5',
            'images/oa/oa-7'
          ]}
        />
      </View>
    );
  }
}
