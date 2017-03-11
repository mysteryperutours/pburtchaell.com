import React from 'react';
import WorkItemHeader from './index';

describe(WorkItemHeader.name, () => {
  it('renders component when pending', () => {
    const component = (
      <WorkItemHeader
        isPending={true}
      />
    );

    expect(shallow(component)).toMatchSnapshot();
  });

  it('renders component when fulfilled', () => {
    const component = (
      <WorkItemHeader
        isPending={false}
        title="Foo"
        description="Foo is foo"
        backgroundColor="rgb(0,0,0)"
        textColor="rgb(0,0,0)"
        coverImage={{
          url: ''
        }}
      />
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
