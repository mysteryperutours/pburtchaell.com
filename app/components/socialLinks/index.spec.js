import React from 'react';
import SocialLinks from './index';

describe(SocialLinks.name, () => {
  it('should render component', () => {
    expect(shallow(
      <SocialLinks />
    )).toMatchSnapshot();
  });
});
