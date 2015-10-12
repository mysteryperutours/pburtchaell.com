import React, { Component, PropTypes } from 'react';
import { Section } from 'components/layout';
import { Image } from 'components/core';
import './grid.less';

export default class Grid extends Component {

  /**
   * @function
   * @description Return the src to the image.
   */
  getImageSrc(image) {

    /**
     * If you are retina, well then use retina images.
     */
    if (window.devicePixelRatio > 1) {
      return require(`../../${image}@2x.png`);
    }

    /**
     * If you are on a large screen, then use the large
     * image in the PNG format.
     */
    if (window.innerWidth > 400) {
      return require(`../../${image}-large.png`);
    }

    /**
     * If you are on a small screen, then use the smaller
     * image in the JPEG format.
     */
    if (window.innerWidth < 400) {
      return require(`../../${image}-small.jpeg`);
    }
  }

  render() {
    const size = Math.round(((window.innerWidth - 50) / 3) - 50);
    const largeSize = Math.round(window.innerWidth - 50) - 50;

    return (
      <Section noPadding>
        <div className="row row-full-width row-no-gutter">
          <div className="col col-l-12 col-s-12">
            <div className={!this.props.large ? "image-grid"  : "image-grid image-grid-large"}>
              {this.props.title ? (
                <h3 style={{
                  display: 'block',
                  maxWidth: 700,
                  margin: '0 auto',
                  marginBottom: '3rem',
                  textAlign: 'center'
                }}>{this.props.title}</h3>
              ) : null}
             {this.props.images.map(image => {
               return (
                  <li
                    key={image}
                    style={{
                      listStyle: 'none',
                      maxWidth: this.props.large ? largeSize : size,
                      margin: this.props.large ? '1rem auto' : null
                    }}
                    className="image-grid-item"
                  >
                    <Image
                      height={this.props.large ? largeSize : size}
                      width={this.props.large ? largeSize : size}
                      src={this.getImageSrc(image)}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
