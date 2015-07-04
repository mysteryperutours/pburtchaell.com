import React from 'react';
import View from 'components/view';
import Section from 'components/section';
import Availability from 'components/availability';

export default class PhotoView extends React.Component {
  render() {
    return (
      <View>
        <Section name="hero">
          <div className="work-hero-background about"></div>
        </Section>
      </View>
    );
  }
}
