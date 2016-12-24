import React from 'react';
import RouteContainer from './index';

describe(RouteContainer.name, () => {
  const DEFAULT_CHILD = 'foo';

  it('should render component', () => {
    expect(shallow(
      <RouteContainer>
        {DEFAULT_CHILD}
      </RouteContainer>
    )).toMatchSnapshot();
  });
});
