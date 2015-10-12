import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { View, Section } from 'components/layout';
import Image from 'components/core/image';

export default class ScouterWorksView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section name="scouter">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Scouter</h1>
              <Link to="/"><small dangerouslySetInnerHTML={{
                __html: '&larr; back'
              }}></small></Link>
            </div>
            <div className="col col-l-10 col-s-12">
              <figure className="image-bleed">
                <Image
                  src={require('images/scouter/scouter-01-large.png')}
                  height="500px"
                />
              </figure>
              <div className="text-secondary">
                <small>Link</small>
              </div>
              <div>
                <a
                  href="http://scouters.co"
                  target="_blank"
                  dangerouslySetInnerHTML={{
                    __html: 'scouters.co &#8594;'
                  }}
                ></a>
              </div>
              <div className="text-secondary">
                <small>Developers</small>
              </div>
              <div>
                Patrick Burtchaell, Jinyue Xia, & Antonio Cardenas
              </div>
              <div className="text-secondary">
                <small>Design</small>
              </div>
              <div>
                Patrick Burtchaell
              </div>
              <hr />
              <p>Scouter was built as my team's hack for PennApps Fall 2015. It provides filmmakers and location scouts with a means for finding locations and a place for property owners to list thier own properties. Note that the app is not fully-functional as we wanted a proof of concept for the hackathon.</p>
            </div>
            <div className="col col-l-12 col-s-12">
              <figure className="image-full-width">
                <Image
                  src={require('images/scouter/scouter-02-large.png')}
                  height="500px"
                />
                <figcaption>
                  <p>Scouter home page</p>
                </figcaption>
              </figure>
              <p>Users are able to sign in as property owners to create new property listings. Filmmakers are able to sign in to book locations and communicate with other users on the network.</p>
              <figure className="image-bleed">
                <Image
                  src={require('images/scouter/scouter-03-large.png')}
                  height="500px"
                />
                <figcaption>
                  <p>Scouter sign in modal</p>
                </figcaption>
              </figure>

              <figure className="image-small">
                <Image
                  src={require('images/scouter/scouter-04-large.png')}
                  height="500px"
                />
                <figcaption>
                  <p>Property attributes</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
