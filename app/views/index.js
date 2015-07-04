import React from 'react';
import { RouteHandler } from 'react-router';
import usePureRender from 'components/pure';

export default usePureRender(class IndexView extends React.Component {
  static contextTypes = {
    flux: React.PropTypes.func,
  }

  render() {
    return <RouteHandler {...this.props} />
  }
});
