import React, { Component, PropTypes } from 'react';
import { Section } from 'components/layout';
import { Image } from 'components/core';
import './grid.less';

export default class Grid extends Component {
  render() {
    const size = Math.round(((window.innerWidth - 50) / 3) - 50);

    return (
      <Section noPadding>
        <div className="row row-full-width row-no-gutter">
          <div className="col col-l-12 col-s-12">
            <div className="image-grid">
             {this.props.images.map(image => {
               return (
                  <li
                    key={image.id}
                    style={{
                      listStyle: 'none',
                      maxWidth: size
                    }}
                    className="image-grid-item"
                  >
                    <Image
                      height={size}
                      width={size}
                      src={image.src}
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
