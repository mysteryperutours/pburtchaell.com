import React from 'react';
import Icon, { types } from './index';

describe(Icon.name, () => {
  it('should render GitHub icon', () => {
    expect(shallow(
      <Icon
        type={types.GITHUB}
      />
    )).toMatchSnapshot();
  });

  it('should render Facebook icon', () => {
    expect(shallow(
      <Icon
        type={types.FACEBOOK}
      />
    )).toMatchSnapshot();
  });

  it('should render Twitter icon', () => {
    expect(shallow(
      <Icon
        type={types.TWITTER}
      />
    )).toMatchSnapshot();
  });

  it('should render Dribbble icon', () => {
    expect(shallow(
      <Icon
        type={types.DRIBBBLE}
      />
    )).toMatchSnapshot();
  });
});
