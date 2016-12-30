import React from 'react';
import WorkRoute from './component';

describe(WorkRoute.name, () => {
  it('should render component', () => {
    expect(shallow(<WorkRoute />)).toMatchSnapshot();
  });
});
