import React, { Component } from 'react';
import { Link } from 'react-router';
import Section from 'components/layout/section';
import FeedItem from './feed-item';

export default class Feed extends Component {
  render() {
    return (
      <Section style={{ paddingTop: '1rem' }}>
        <div className="row">
          <div className="col col-l-2 col-s-12">
            <h2 className="page-title">Selected Work</h2>
          </div>
          <div className="col col-l-10 col-s-12">
            {this.props.items.map(item => (
              <FeedItem
                key={item.id}
                data={item}
              />
            ))}
            <small className="feed-text">More examples of my work can be found on <a href="https://github.com/pburtchaell" target="blank">Github</a> and on <a href="https://dribbble.com/-p" target="blank">Dribbble</a>. Additionally, I maintain <Link to="/work/personal">a collection</Link> of personal and client work that did not make the final cut.</small>
          </div>
        </div>
      </Section>
    );
  }
}
