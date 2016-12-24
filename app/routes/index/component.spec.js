import React from 'react';
import IndexRoute from './component';

describe(IndexRoute.name, () => {
  it('should render component', () => {
    const wrapper = shallow(
      <IndexRoute />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
