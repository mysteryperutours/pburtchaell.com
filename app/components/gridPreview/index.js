// @flow
import React, { Component } from 'react';

class GridPreview extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderVerticalLines = this.renderVerticalLines.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  renderVerticalLines(props) {
    const height = 9999;
    const limit = (height / this.props.height) - (height % this.props.height);
    const lines = [];

    const style = {
      height: this.props.height,
      boxSizing: 'border-box',
      position: 'relative',
      borderBottom: '1px dashed rgba(10,10,10,.15)',
      pointerEvents: 'none',
    };

    for (let i = 0; i < limit; i++) {
      lines.push(
        <div
          key={i}
          style={style}
        />
      );
    }

    return lines;
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          height: document.height,
          width: '100%',
          zIndex: '99999',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 99999
        }}
      >
        {this.renderVerticalLines()}
      </div>
    );
  }
}

GridPreview.defaultProps = {};

export default GridPreview;
