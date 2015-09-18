import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'components/layout/view';
import Section from 'components/layout/section';
import Feed from './components/feed';

export default class HomeView extends Component {
  render() {
    return (
      <View>
        <Section style={{ paddingBottom: '1rem' }}>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Patrick<br/>
                Burtchaell
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>I co-founded <a href="http://lawnchair.io">Lawn Chair</a>, a software development and design studio, where we
              are working on both client projects and products like <a href="http://segment.social">Segment</a>.</p>
              <hr />
              <p className="home-subtitle">
                <small>Previously, I worked at <a href="https://joinpeach.com">Peach</a> and as a contract web developer in New Orleans. I currently attend Loyola University New Orleans as a design and computer science undergraduate student. I will graduate in 2018. I attended New Orleans Center for the Creative arts from 2010 to 2014.</small>
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
              type: 'Branding and web application',
              date: '2015'
            },
            {
              id: 3,
              link: '/work/scouter',
              title: 'Scouter',
              type: 'Web application for PennApps',
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
            /*{
              id: 1,
              link: '/work/peach',
              title: 'Peach',
              type: 'Web application',
              date: '2014-2015'
            },
            {
              id: 5,
              link: '/work/loyola',
              title: 'Loyola University New Orleans',
              type: 'Works from undergraduate studies',
              date: '2014-2018'
            }*/
          ]}
        />
      </View>
    );
  }
}
