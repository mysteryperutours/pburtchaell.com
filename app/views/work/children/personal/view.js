import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';
import Grid from 'components/portfolio/grid';

export default class PersonalWorksView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12"></div>
            <div className="col col-l-10 col-s-12">
              <h1 className="page-title-no-float">Personal</h1>
              <div className="text-tertiary">Personal design work from 2012, 2013 & 2014 that did not make the cut for my portfolio</div>
            </div>
          </div>
        </Section>
        <Grid
          images={[
            'images/personal/01',
            'images/personal/02',
            'images/personal/03',
            'images/personal/04',
            'images/personal/05',
            'images/personal/06',
            'images/personal/07',
            'images/personal/08',
            'images/personal/09',
            'images/personal/10',
            'images/personal/11',
            'images/personal/12',
            'images/personal/13',
            'images/personal/15',
            'images/personal/16',
            'images/personal/17',
            'images/personal/19',
            'images/personal/20',
            'images/personal/21',
          ]}
        />
      </View>
    );
  }
}
