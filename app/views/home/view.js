import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'components/layout/view';
import Section from 'components/layout/section';
import Feed from './components/feed';

export default class HomeView extends Component {
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
        <Feed
          items={[
            {
              id: 2,
              link: '/work/segment',
              title: 'Segment',
              color: '#000',
              type: 'Branding and web application',
              date: '2015'
            },
            {
              id: 3,
              link: '/work/scouter',
              title: 'Scouter',
              type: 'Branding and web application',
              date: '2015'
            },
            {
              id: 4,
              link: '/work/lawnchair',
              title: 'Lawn Chair Studios',
              type: 'Branding and web page',
              date: '2015'
            },
            {
              id: 5,
              link: '/work/oa',
              title: 'Order of the Arrow',
              type: 'Advertising',
              date: '2013-2014'
            }
          ]}
        />
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
