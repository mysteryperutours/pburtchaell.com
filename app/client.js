import 'babel-core/polyfill';
import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import './styles/styles.less';

if (!Object.assign) {
  Object.assign = require('object-assign');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.history = new BrowserHistory();
  }

  render() {
    let elements = [];

    elements.push({
      key: 1, // Elements need a key to prevent React from throwing an error
      jsx: (
        <Provider store={store}>
          {() => router(this.history)}
        </Provider>
      )
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
