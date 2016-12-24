import React from 'react';
import Column from './index';

describe(Column.name, () => {
  it('should render component', () => {
    expect(shallow(
      <Column />
    )).toMatchSnapshot();
  });
});
