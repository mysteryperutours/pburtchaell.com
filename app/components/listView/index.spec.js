import React from 'react';
import ListView from './index';

describe(ListView.name, () => {
  it('should render component', () => {
    expect(shallow(
      <ListView
        items={[{
          id: 1
        }, {
          id: 2
        }]}
      />
    )).toMatchSnapshot();
  });
});
