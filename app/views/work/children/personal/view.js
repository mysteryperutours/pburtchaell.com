import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';
import Grid from 'components/portfolio/grid';

export default class PersonalWorksView extends Component {
  state = {
    images: [
      {
        id: 1,
        src: require('images/personal/01.jpg')
      },
      ,
      {
        id: 2,
        src: require('images/personal/02.jpg')
      },
      {
        id: 3,
        src: require('images/personal/03.jpg')
      },
      {
        id: 4,
        src: require('images/personal/04.jpg')
      },
      {
        id: 5,
        src: require('images/personal/05.jpg')
      },
      {
        id: 6,
        src: require('images/personal/06.jpg')
      },
      {
        id: 7,
        src: require('images/personal/07.jpg')
      },
      {
        id: 8,
        src: require('images/personal/08.jpg')
      },
      {
        id: 9,
        src: require('images/personal/09.jpg')
      },
      {
        id: 10,
        src: require('images/personal/10.jpg')
      },
      {
        id: 11,
        src: require('images/personal/11.jpg')
      },
      {
        id: 12,
        src: require('images/personal/12.jpg')
      },
      {
        id: 13,
        src: require('images/personal/13.jpg')
      },
      {
        id: 15,
        src: require('images/personal/15.png')
      },
      {
        id: 16,
        src: require('images/personal/16.jpg')
      },
      {
        id: 17,
        src: require('images/personal/17.jpg')
      },
      {
        id: 19,
        src: require('images/personal/19.png')
      },
      {
        id: 20,
        src: require('images/personal/20.jpg')
      },
      {
        id: 21,
        src: require('images/personal/21.jpg')
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
              <h1 className="page-title-no-float">Personal</h1>
              <div className="text-tertiary">Personal design work from 2012, 2013 & 2014 that did not make the cut for my portfolio</div>
            </div>
          </div>
        </Section>
        <Grid images={this.state.images} />
      </View>
    );
  }
}
