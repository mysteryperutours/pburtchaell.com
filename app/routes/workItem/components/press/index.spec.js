import React from 'react';
import Press from './index';

const MOCK_PRESS_ITEMS = [{
  id: '0',
  title: 'Foo',
  url: 'http://foo.com'
}];

describe(Press.name, () => {
  it('renders component', () => {
    const component = (
      <Press
        items={MOCK_PRESS_ITEMS}
      />
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
