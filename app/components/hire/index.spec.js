import React from 'react';
import WorkItemHire from './index';

describe(WorkItemHire.name, () => {
  it('renders component', () => {
    const component = (
      <WorkItemHire />
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
