import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { View, Section } from 'components/layout';
import Image from 'components/core/image';

export default class LawnchairWorksView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section name="writing">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Lawn Chair Studios</h1>
              <Link to="/"><small dangerouslySetInnerHTML={{
                __html: '&larr; back'
              }}></small></Link>
            </div>
            <div className="col col-l-10 col-s-12">
              <figure className="image-bleed">
                <Image
                  src={require('images/lawnchair/lawnchair-01-large.png')}
                  height={500}
                />
              </figure>
              <div className="text-secondary">
                <small>Link</small>
              </div>
              <div>
                <a
                  href="http://lawnchair.io"
                  target="_blank"
                  dangerouslySetInnerHTML={{
                    __html: 'lawnchair.io &#8594;'
                  }}
                ></a>
              </div>
              <br />
              <div className="text-tertiary"><small>Follow work from <a href="https://dribbble.com/-p/projects/292962-Lawn-Chair" target="_blank">this project on Dribbble</a>.</small></div>
              <hr />
              <p>Lawn Chair is a software development & design studio I started with three friends. We are currently working together to develop  our ideas for products, games and applications. In May 2015, I designed the company website and branding. The goal of both the branding and the website was to relfect the happy and playful nature of the company without breaking the rational & classical design principles I often embrace in my work. We are a company that does great work and is certainly not afraid to have fun at the same time.</p>
              <figure className="image-full-width">
                <Image
                  src={require('images/lawnchair/lawnchair-02-large.png')}
                  height={500}
                />
                <figcaption>
                  <p>Lawn Chair Studios home page, which includes the latest post from the company blog</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
