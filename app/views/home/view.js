import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'app-core/view';
import Section from 'app-core/section';

class HomeView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section style={{ paddingBottom: '1rem' }}>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Patrick<br/>
                Burtchaell
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>Presently, I work as a product design intern at Facebook in Menlo Park. Last year, I co-founded <a href="http://lawnchair.io">Lawn Chair</a>, a software development and design company, where we
              are working with clients and on internal products like <a href="http://segment.social">Segment</a>.</p>
              <hr />
              <p className="home-subtitle">
                <small>Previously, I worked freelance in New Orleans. I currently attend Loyola University New Orleans as a design undergraduate student considering a sociology minor. I will graduate in 2018. I attended New Orleans Center for the Creative arts from 2010 to 2014.</small>
              </p>
            </div>
          </div>
        </Section>
        <Section style={{ paddingBottom: '1rem', paddingTop: 0 }}>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Writing
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>I frequently write <a href="https://medium.com/@pb">on Medium</a> about design and technology.</p>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}

export default HomeView;
