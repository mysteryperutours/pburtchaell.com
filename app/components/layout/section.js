import React, { Component } from 'react';

export default class Section extends Component {
  static defaultProps = {
    theme: 'white',
    name: 'default',
  }

  getClassName() {
    let sectionName = `section-${this.props.name}`;
    let sectionTheme = `section-theme-${this.props.theme}`;
    return `section-base ${sectionName} ${sectionTheme}`;
  }

  getStyle() {
    if (this.props.style) {
      return this.props.style;
    } if (this.props.image) {
      const image = this.props.image;
      const style = {
        background: `url(${image}) center center / cover no-repeat`,
      };
      return style;
    }
  }

  render() {
    return (
      <section className={::this.getClassName()} style={::this.getStyle()}>
        <div className="row row-large">
          <div className="col col-l-12 col-s-12">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}
