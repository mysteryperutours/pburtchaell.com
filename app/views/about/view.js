import React, { Component } from 'react';
import View from 'components/layout/view';
import Section from 'components/layout/section';
import Availability from '../work/components/availability';

export default class AboutView extends Component {
  render() {
    return (
      <View isFooterDark={true}>
        <Section name="about">
          <div className="row row-large">
            <div className="col col-l-12 col-s-12">
              <h1>About</h1>
              <p>I specialise in user-interface design and front end web development. I consider myself a designer with a passion for programming. For my job, it is hard to split the two apart.</p>
              <p>I spend my time enrolled as a full-time design and computer science undergraudate student at Loyola University New Orleans and a part-time web developer and designer. I operate through <a href="http://lawnchair.io">Lawn Chair Studios</a>, where I am a co-founder and CEO. I expect to graduate from Loyola in 2018.</p>
              <p>I am currently available for small-size projects and part-time work.</p>
              <p>Over the past several years, I have had the oppurtunity to work with several startups and organisations from the New Orleans area, the United States and Europe to build web products. My venture is about meeting new teams, building powerful products, having fun, and learning new things.</p>
              <p>If you are interested in hiring me, via Lawn Chair, for your next project, send me an email at <a href="mailto:patrick@lawnchair.io">patrick@lawnchair.io</a>. If you are just saying hello, you can get in touch at <a href="mailto:patrick@pburtchaell.com">patrick@pburtchaell.com</a></p>
            </div>
          </div>
        </Section>
        <Section image={require('images/cover.png')} theme="hero"></Section>
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
                <a href="mailto:patrick@pburtchaell.com">patrick</a>
                <span>@pburtchaell.com</span>
              </div>
              <div>
                <a href="mailto:patrick@lawnchair.io">patrick</a>
                <span>@lawnchair.io</span>
              </div>
              <br />
              <div>
                <div>P.O. Box 346</div>
                <div>Chalmette, Louisiana 70044</div>
                <div>United States of America</div>
              </div>
            </div>
          </div>
        </Section>
        <Availability />
      </View>
    );
  }
}
