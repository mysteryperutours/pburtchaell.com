import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './utils/analytics';
import './utils/polyfills';
import './styles';

global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;

class App extends Component {
  constructor(props, context) {
    super(props, context);

    window.analytics.load("QcOkDZZFylLTALyZoCp2cRgo9ZS0ZcUf");
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
