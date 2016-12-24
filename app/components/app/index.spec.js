import React from 'react';
import App from './index';

describe(App.name, () => {
  it('should render component', () => {
    expect(shallow(
      <App />
    )).toMatchSnapshot();
  });
});
