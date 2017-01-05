import React from 'react';
import Icon from './index';

describe(Icon.name, () => {
  it('should render GitHub icon', () => {
    expect(shallow(
      <Icon
        type="github"
      />
    )).toMatchSnapshot();
  });

  it('should render Facebook icon', () => {
    expect(shallow(
      <Icon
        type="facebook"
      />
    )).toMatchSnapshot();
  });

  it('should render Twitter icon', () => {
    expect(shallow(
      <Icon
        type="twitter"
      />
    )).toMatchSnapshot();
  });
});
