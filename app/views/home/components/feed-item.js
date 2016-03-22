import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class FeedItem extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      isActive: false
    };
  }

  render() {
    const { isActive } = this.state;

    return (
      <article
        style={isActive ? {
          background: this.props.color,
          padding: '3rem'
        } : null}
        className="works-feed-item"
        onHover={this.setState.bind(this, {
          isActive: !isActive
        })}
      >
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

export default FeedItem;
