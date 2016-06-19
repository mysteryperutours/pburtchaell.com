import React, { Component } from 'react';
import View from 'app-core/view';
import Section from 'app-core/section';
import Image from 'app-core/image';

export default class AboutView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section name="about" style={{
          paddingBottom: '1rem'
        }}>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">About</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <figure className="image-bleed">
                <Image
                  src={require('images/me-large.png')}
                  height="300"
                  style={{
                    maxHeight: 300,
                    maxWidth: 300
                  }}
                />
              </figure>
              <p>I specialize in product design, but also practice visual design and front-end web development.</p>
              <p>I spend my time enrolled as a full-time design undergraduate student at Loyola University New Orleans and as a part-time web developer and product designer. I operate through <a href="http://lawnchair.io">Lawn Chair Studios</a>, where I am a co-founder. I expect to graduate from Loyola in 2018.</p>
              <p>Over the past several years, I have had the oppurtunity to work with several startups and organizations from the New Orleans area, the United States and Europe to design and build web products.</p>
              <p>If you are interested in hiring me, via Lawn Chair, for your next project, send me an email at <a href="mailto:patrick@lawnchair.io">patrick@lawnchair.io</a>. If you are just saying hello, you can get in touch at <a href="mailto:patrick@pburtchaell.com">patrick@pburtchaell.com</a>.</p>
            </div>
          </div>
        </Section>
        <Section name="contact" noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Contact</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <div className="row row-no-gutter">
                <div className="col col-l-6 col-s-6">
                  <div className="text-tertiary">
                    <a href="mailto:patrick@pburtchaell.com">patrick</a>
                    <span>@pburtchaell.com</span>
                  </div>
                  <div className="text-tertiary">
                    <a href="mailto:patrick@lawnchair.io">patrick</a>
                    <span>@lawnchair.io</span>
                  </div>
                  <div className="text-tertiary">
                    <a href="https://facebook.com/pburtchaell" target="blank">Facebook</a><span>, </span>
                    <a href="https://twitter.com/pburtchaell" target="blank">Twitter</a><span>, </span>
                    <a href="https://github.com/pburtchaell" target="blank">GitHub</a><span> & </span>
                    <a href="https://dribbble.com/purtchaell" target="blank">Dribbble</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section name="groups">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Groups & Organizations</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <div className="text-tertiary">
                Member, AIGA Design New Orleans
              </div>
              <div className="text-tertiary">
                Member, DSGN Loyola University New Orleans
              </div>
              <div className="text-tertiary">
                Product Designer, Intern, Facebook, Inc. (2016)
              </div>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
