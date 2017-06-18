import React from 'react';
import ListViewItem from './index';

const MOCK_DATA = {
  title: 'Foo',
  tags: ['Foo', 'Bar', 'Baz'],
  year: '2017',
  linkTo: '/foo'
}

describe(ListViewItem.name, () => {
  it('should render component', () => {
    expect(shallow(
      <ListViewItem
        {...MOCK_DATA}
      />
    )).toMatchSnapshot();
  });

  it('should render component with is-new classname', () => {
    expect(shallow(
      <ListViewItem
        isNew={true}
        {...MOCK_DATA}
      />
    )).toMatchSnapshot();
  });

  it('should render component with is-coming-soon classname', () => {
    expect(shallow(
      <ListViewItem
        isComingSoon={true}
        {...MOCK_DATA}
      />
    )).toMatchSnapshot();
  });
});
