import React, { Component } from 'react';

export default class Section extends Component {
  static defaultProps = {
    theme: 'white',
    name: 'default',
    grid: false
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
        backgroundImage: `url(${image})`,
      };
      return style;
    }
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
