import React from 'react';
import WorkItemRoute from './component';

describe(WorkItemRoute.name, () => {
  it('should render component', () => {
    expect(shallow(<WorkItemRoute />)).toMatchSnapshot();
  });
});
