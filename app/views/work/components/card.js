import React from 'react';
import autobind from 'autobind-decorator'
import Newsletter from 'components/newsletter';

/**
 * @class Card
 * @description A card on the writing or portfolio pages.
 */
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    link: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <article>
        <a href={this.props.link}>
          <header>
            <hgroup>
              <small>
                <time>{this.props.date}</time>
              </small>
              <h1>{this.props.title}</h1>
              <div>{this.props.description}</div>
            </hgroup>
          </header>
        </a>
      </article>
    );
  }
}
