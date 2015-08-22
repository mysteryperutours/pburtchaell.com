import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'components/layout/view';
import Section from 'components/layout/section';

export default class HomeView extends Component {
  componentDidMount() {
    new Masonry(this.refs.grid.getDOMNode(), {
      itemSelector: '.grid-item',
      columnWidth: window.innerWidth / 4
    });
  }

  render() {
    const itemStyle = {
      width: window.innerWidth / 2,
      height: window.innerWidth / 2
    }

    const itemSmallStyle = {
      width: window.innerWidth / 4,
      height: window.innerWidth / 4
    }

    const imageStyle = {
      width: (window.innerWidth / 2) - 10,
      height: (window.innerWidth / 2) - 10
    }

    const imageSmallStyle = {
      width: (window.innerWidth / 4) - 10,
      height: (window.innerWidth / 4) - 10
    }

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
        {/*<div ref="grid" className="grid" style={{
          width: window.innerWidth
        }}>
          <div className="grid-item" style={itemStyle}>
            <div
            style={{
              ...imageStyle,
              backgroundImage: `url(${require('images/website-tiles-04.png')})`
            }}
              className="grid-item-img"
            >
            </div>
          </div>
          <div className="grid-item" style={itemStyle}>
            <div
            style={{
              ...imageStyle,
              backgroundImage: `url(${require('images/website-tiles-05.png')})`
            }}
              className="grid-item-img"
            >
            </div>
          </div>
          <div className="grid-item" style={itemStyle}>
            <div
            style={{
              ...imageStyle,
              backgroundImage: `url(${require('images/website-tiles-03.png')})`
            }}
              className="grid-item-img"
            >
            </div>
          </div>
          <div className="grid-item" style={itemSmallStyle}>
            <div
              style={{
                ...imageSmallStyle,
                backgroundImage: `url(${require('images/website-tiles-02.png')})`
              }}
              className="grid-item-img"
            >
            </div>
          </div>
          <div className="grid-item" style={itemSmallStyle}>
            <div
            style={{
              ...imageSmallStyle,
              backgroundImage: `url(${require('images/website-tiles-01.png')})`
            }}
              className="grid-item-img"
            >
            </div>
          </div>
        </div>*/}
        {/*<Section theme="red">
          <div className="row row-large">
            <div className="col col-l-12 col-s-12">
              <div className="text-align-center">
                <h1>There are few tasks I can't handle.</h1>
                <h4>Let's work together.</h4>
                <button className="button-centered">Contact</button>
              </div>
            </div>
          </div>
        </Section>*/}
      </View>
    );
  }
}
