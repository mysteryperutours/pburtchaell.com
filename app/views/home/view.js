import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'components/layout/view';
import Section from 'components/layout/section';

export default class HomeView extends Component {
  render() {
    return (
      <View isFooterDark={true}>
        <Section theme="black">
          <div className="row">
            <div className="col col-l-12 col-s-12">
              <h1>I design and write code.</h1>
              <p>I co-founded <a href="http://lawnchair.io">Lawn Chair</a>, a software development and design studio, where we
              are working on both client projects and self-made products like <a href="http://segment.social">Segment</a>. We are currently available for short-term projects.</p>
              <hr />
              <p>
                <small>Previously, I worked at <a href="https://joinpeach.com">Peach</a> and as a contract web developer in New Orleans. I attended New Orleans Center for the Creative arts from 2010 to 2014. I currently attend Loyola University New Orleans as a design and computer science undergraduate student. I will graduate in 2018. <Link to="about">Read more</Link>...</small>
              </p>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
