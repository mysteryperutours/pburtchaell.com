import React, { Component } from 'react';

export default Component => {
  return class PureRender extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    }

    /**
     * @function shouldComponentUpdate
     * @description Implements a pure render.
     * @returns {bool}
     */
    shouldComponentUpdate(nextProps) {
      return nextProps !== this.props;
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};
