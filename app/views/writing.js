import React from 'react';
import View from 'components/view';
import Section from 'components/section';
import Card from 'components/card';

export default class WritingView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View isFooterDark={true}>
        <Section name="writing" theme="black">
          <Card
            link="/2015/sails/"
            date="March 4, 2015"
            title="Sails.js and Heroku"
          />
          <Card
            link="/2014/using-source-maps/"
            date="March 26, 2014"
            title="Using Source Maps"
          />
          <Card
            date="March 24, 2014"
            link="/2014/naming-font-files-for-the-web/"
            title="Naming font-files for the web"
          />
          <Card
            date="February 2, 2014"
            link="/2014/goodbye-twitter-mobile/"
            title="Goodbye Twitter Mobile"
          />
          <Card
            date="January 26, 2014"
            link="/2014/project-2014-weeks-2-3/"
            title="Project 2014 - Weeks 2 & 3"
          />
          <Card
            date="January 18, 2014"
            link="/2014/project-2014-week-one/"
            title="Project 2014 - Week 1 & Concept"
          />
          <Card
            date="October 13, 2013"
            link="/2013/put-away-your-phone-and-talk-to-me/"
            title="Put Away Your Phones, Talk"
          />
        </Section>
      </View>
    );
  }
}
