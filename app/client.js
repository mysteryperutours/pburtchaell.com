import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="app-container">
        <Router
          routes={require('./routes').default}
          history={browserHistory}
        />
      </div>
    );
  }
}

render(<App />, document.querySelector('#mount'));
