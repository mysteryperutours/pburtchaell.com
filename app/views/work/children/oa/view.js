import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';
import Grid from 'components/portfolio/grid';

export default class OAWorksView extends Component {
  state = {
    images: [
      {
        id: 1,
        src: require('images/oa/oa-1.png')
      },
      {
        id: 2,
        src: require('images/oa/oa-2.png')
      },
      {
        id: 7,
        src: require('images/oa/oa-7.jpg')
      },
      {
        id: 6,
        src: require('images/oa/oa-6.png')
      },
      {
        id: 3,
        src: require('images/oa/oa-3.png')
      },
      {
        id: 4,
        src: require('images/oa/oa-4.png')
      },
      {
        id: 5,
        src: require('images/oa/oa-5.png')
      }
    ]
  }

  render() {
    return (
      <View {...this.props.route.config}>
        <Section noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12"></div>
            <div className="col col-l-10 col-s-12">
              <h1 className="page-title">Order of the Arrow, Boy Scouts of America</h1>
              <div className="text-tertiary">Selected works from 2013 & 2014</div>
            </div>
          </div>
        </Section>
        <Grid images={this.state.images} />
      </View>
    );
  }
}
