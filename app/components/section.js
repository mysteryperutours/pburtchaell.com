import React from 'react';
import autobind from 'autobind-decorator'

/**
 * @class Section
 * @description A section in a view.
 */
export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    theme: 'white',
    name: 'default',
  }

  @autobind
  getClassName() {
    let sectionName = `section-${this.props.name}`;
    let sectionTheme = `section-theme-${this.props.theme}`;
    return `section-base ${sectionName} ${sectionTheme}`;
  }

  @autobind
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
      <section className={this.getClassName()} style={this.getStyle()}>
        {this.props.children}
      </section>
    );
  }
}
