import React from 'react';
import View from 'components/view';
import Section from 'components/section';
import request from 'superagent';
import autobind from 'autobind-decorator';
import Newsletter from 'components/newsletter';

export default class DevelopmentView extends React.Component {
  render() {
    return (
      <View>
        <Section theme="white">
          <div className="row">
            <div className="col col-l-6 col-s-12">
              <b>Writing & Talks</b>
            </div>
            <div className="col col-l-6 col-s-12">
            <ul className="no-bullets">
              <li>2015: <a href="http://pburtchaell.com/styleguide">Code Styleguide</a></li>
              <li>2014: <a href="http://www.slideshare.net/pburtchaell/gulp-v-grunt">Gulp v. Grunt</a></li>
            </ul>
            </div>
          </div>
        </Section>
        <Section theme="white">
          <div className="row">
            <div className="col col-l-6 col-s-12">
              <b>Past Clients</b>
            </div>
            <div className="col col-l-6 col-s-12">
            <ul className="no-bullets">
              <li>2015: <a href="http://lawnchair.io">Lawn Chair</a></li>
              <li>2015: <a href="http://segment.social">Segment</a></li>
              <li>2015: <a href="http://usehuddle.com">Huddle</a></li>
              <li>2014: <a href="http://joinpeach.com">Peach</a></li>
              <li>2014: <a href="http://fileee.com">fileee</a></li>
              <li>2013: <a href="http://oa-bsa.org">Boy Scouts of America</a></li>
            </ul>
            </div>
          </div>
        </Section>
        <Section theme="white">
          <div className="row">
            <div className="col col-l-6 col-s-12">
              <b>Open Source</b>
            </div>
            <div className="col col-l-6 col-s-12">
              <div>
                <span>github.com</span>
                <a href="https://github.com/pburtchaell">/pburtchaell</a>
              </div>
              <a href="github.com/react-input">React Input</a>
              <br />
              <a href="github.com/react-notification">React Notification</a>
              <br />
              <a href="github.com/react-notification">Assemble</a>
              <br />
              <a href="github.com/react-notification">Generator Assemble</a>
            </div>
          </div>
        </Section>
        <Newsletter />
      </View>
    );
  }
}
