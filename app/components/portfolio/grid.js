import React, { Component, PropTypes } from 'react';
import { Section } from 'components/layout';

var Masonry = require('react-masonry-component')(React);

export default class Grid extends Component {
  render() {
    return (
      <Section noPadding>
        <div className="row row-full-width row-no-gutter">
          <div className="col col-l-12 col-s-12">
            <Masonry
              className="work-class"
              elementType="ul"
              options={{
                gutter: 7
              }}
           >
               {this.props.images.map(image => {
                 return (
                    <li
                      key={image.id}
                      style={{
                        listStyle: 'none'
                      }}
                      className="image-element-class"
                    >
                      <img
                        style={{
                          height: 'auto',
                          width: (window.innerWidth - 14) / 3,
                          margin: 0,
                          padding: 0
                        }}
                        src={image.src}
                      />
                    </li>
                  );
              })}
           </Masonry>
          </div>
        </div>
      </Section>
    );
  }
}
