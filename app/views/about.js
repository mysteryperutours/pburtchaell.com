import React from 'react';
import View from 'components/view';
import Section from 'components/section';
import Availability from 'components/availability';
import Newsletter from 'components/newsletter';

export default class AboutView extends React.Component {
  render() {
    return (
      <View isFooterDark={true}>
        <Section name="hero">
          <div className="work-hero-background about"></div>
        </Section>
        <Section>
          <div className="row row-large">
            <div className="col col-l-6 col-s-12">
              <b>I design and engineer user interfaces.</b>
              <p>In 2015, I co-founded <a href="http://lawnchair.io">Lawn Chair</a>, a software development and design studio, where we
              are working on our own products like <a href="http://segment.social">Segment</a> as well as client projects.</p>
              <hr />
              <small>Previously, I worked at <a href="https://joinpeach.com">Peach</a> and as a contract web developer. I attended New Orleans Center for the Creative arts from 2010 to 2014.</small>
            </div>
            <div className="col col-l-6 col-s-12"></div>
          </div>
        </Section>
        <Section name="about" theme="white">
          <div className="row row-large">
            <div className="col col-l-6 col-s-12"></div>
            <div className="col col-l-6 col-s-12">
              <b>About</b>
              <p>I specialise in user-interface design and front end web development. I consider myself a designer with a passion for programming. For my job, it is hard to split the two apart.</p>
              <p>I spend my time enrolled as a full-time design and computer science undergraudate student at Loyola University New Orleans and a part-time web engineer and designer.</p>
              <p>Over the past several years, I have had the oppurtunity to work with several startups and organisations from the New Orleans area, the United States and Europe to build web products. My venture is about meeting new teams, building powerful products, having fun, and learning new things.</p>
              <p>If you are interested in hiring me for your next project, send me an email at <a href="mailto:patrick@pburtchaell.com">patrick@pburtchaell.com</a>.</p>
            </div>
          </div>
        </Section>
        <Section name="contact" theme="white">
          <div className="row row-large">
            <div className="col col-l-6 col-s-12">
              <b>Contact</b>
            </div>
            <div className="col col-l-6 col-s-12">
              <div>
                <a href="https://twitter.com/pburtchaell">@pburtchaell</a>
              </div>
              <div>
                <span>github.com</span>
                <a href="https://github.com/pburtchaell">/pburtchaell</a>
              </div>
              <div>
                <a href="mailto:patrick@pburtchaell.com">patrick</a>
                <span>@pburtchaell.com</span>
              </div>
            </div>
          </div>
        </Section>
        <Newsletter />
        <Availability />
      </View>
    );
  }
}
