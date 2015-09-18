import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { View, Section } from 'components/layout';
import Image from 'components/core/image';

export default class SegmentPostsView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section name="writing">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Segment</h1>
              <Link to="/"><small dangerouslySetInnerHTML={{
                __html: '&larr; back'
              }}></small></Link>
            </div>
            <div className="col col-l-10 col-s-12">
              <figure className="image-bleed">
                <Image
                  src={require('images/segment/segment-01.png')}
                  height={500}
                />
              </figure>
              <div className="text-secondary">
                <small>Link</small>
              </div>
              <div>
                <a
                  href="http://segment.social"
                  target="_blank"
                  dangerouslySetInnerHTML={{
                    __html: 'segment.social &#8594;'
                  }}></a>
              </div>
              <div className="text-secondary">
                <small>Developers</small>
              </div>
              <div>
                Jon Carl, Liam Craver & Patrick Burtchaell
              </div>
              <div className="text-secondary">
                <small>Design</small>
              </div>
              <div>
                Patrick Burtchaell
              </div>
              <hr />
              <div><small>Follow <a href="https://dribbble.com/-p/projects/250218-Segment" target="_blank">this project on Dribbble</a>.</small></div>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
