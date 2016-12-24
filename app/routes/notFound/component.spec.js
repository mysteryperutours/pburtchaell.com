import React from 'react';
import NotFoundRoute from './component';

describe(NotFoundRoute.name, () => {
  it('should render component', () => {
    expect(shallow(<NotFoundRoute />)).toMatchSnapshot();
  });
});
