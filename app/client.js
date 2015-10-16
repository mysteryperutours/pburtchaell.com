import 'babel-core/polyfill';
import 'isomorphic-fetch';
import React, { Component } from 'react';
import router from './router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import './styles/styles';
import './utils/analytics';

if (!Object.assign) {
  Object.assign = require('object-assign');
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    window.analytics.load("QcOkDZZFylLTALyZoCp2cRgo9ZS0ZcUf");
  }

  render() {
    let elements = [];

    elements.push({
      key: 1, // Elements need a key to prevent React from throwing an error
      jsx: router(createBrowserHistory)
    });

    if (DEV_TOOLS === true) {
      const {
        DevTools,
        DebugPanel,
        LogMonitor
      } = require('redux-devtools/lib/react');

      elements.push({
        key: 2,
        jsx: (
          <DebugPanel top right bottom key="debugPanel">
            <DevTools store={store()} monitor={LogMonitor}/>
          </DebugPanel>
        )
      });
    }

    return (
      <div className="app-container">
        {elements.map(element => {
          return <div key={element.key}>{element.jsx}</div>;
        })}
      </div>
    );
  }
}

React.render(<App />, document.querySelector('#mount'));
