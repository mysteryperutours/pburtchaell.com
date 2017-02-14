import React from 'react';
import AboutRoute from './component';

describe(AboutRoute.name, () => {
  it('should render component', () => {
    expect(shallow(
      <AboutRoute
        params={{}}
        route={{}}
      />
    )).toMatchSnapshot();
  });
});
