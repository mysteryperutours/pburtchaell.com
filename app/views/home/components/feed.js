import React, { Component } from 'react';
import Section from 'components/layout/section';
import FeedItem from './feed-item';

export default class Feed extends Component {
  render() {
    return (
      <Section style={{ paddingTop: '1rem' }}>
        <div className="row">
          <div className="col col-l-2 col-s-12">
            <h2 className="page-title">Works</h2>
          </div>
          <div className="col col-l-10 col-s-12">
            {this.props.items.map(item => {
              return (
                <FeedItem
                  key={item.id}
                  data={item}
                />
              );
            })}
            <small className="feed-text">More examples of my work can be found on <a href="https://github.com/pburtchaell" target="blank">Github</a> and on <a href="https://dribbble.com/-p" target="blank">Dribbble</a>.</small>
          </div>
        </div>
      </Section>
    );
  }
}
