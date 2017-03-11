import React from 'react';
import WorkItemPress from './index';

const MOCK_PRESS_ITEMS = [{
  id: '0',
  title: 'Foo',
  url: 'http://foo.com'
}];

describe(WorkItemPress.name, () => {
  it('renders component', () => {
    const component = (
      <WorkItemPress
        items={MOCK_PRESS_ITEMS}
      />
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
