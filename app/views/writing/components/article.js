import React, { Component } from 'react';
import Biography from './biography';

export default class Article extends Component {
  render() {
    return this.props.isPending !== true (
      <article>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <div>
          {this.props.html}
        </div>
        <footer>
          <Biography />
        </footer>
      </article>
    ) : false;
  }
}
