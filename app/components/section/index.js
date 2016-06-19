import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './styles';

class Section extends Component {
  getClassName() {
    return classnames('section-base', [
      `section-${this.props.name}`,
      `section-theme-${this.props.theme}`
    ]);
  }

  getStyle() {
    const defaultStyles = {
      padding: this.props.noPadding ? 0 : null
    };

    if (this.props.style) {
      return Object.assign(this.props.style, defaultStyles);
    }

    if (this.props.image) {
      return Object.assign({
        backgroundImage: `url(${this.props.image})`,
      }, this.props.style, defaultStyles);
    }

    return defaultStyles;
  }

  render() {
    return !this.props.image ? (
      <section className={::this.getClassName()} style={::this.getStyle()}>
        {this.props.grid ? (
          <div className="row">
            <div className="col col-l-12 col-s-12">
              {this.props.children}
            </div>
          </div>
        ) : this.props.children}
      </section>
    ) : (
      <section className={::this.getClassName()} style={::this.getStyle()}></section>
    );
  }
}

Section.defaultProps = {
  theme: 'white',
  name: 'default',
  grid: false
};

export default Section;
