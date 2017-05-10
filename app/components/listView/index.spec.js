import React from 'react';
import ListViewItem from './index';

describe(ListViewItem.name, () => {
  it('should render component', () => {
    expect(shallow(
      <ListViewItem />
    )).toMatchSnapshot();
  });
});
