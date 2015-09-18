import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class FeedItem extends Component {
  render() {
    return (
      <article className="works-feed-item">
        <div className="works-feed-item-content">
          <Link to={this.props.data.link}>
            <h1 className="works-feed-item-title">{this.props.data.title}</h1>
          </Link>
          <div className="works-feed-item-attributes">
            <time>{this.props.data.date}</time>
            <span>{' - ' + this.props.data.type}</span>
          </div>
        </div>
      </article>
    );
  }
}
