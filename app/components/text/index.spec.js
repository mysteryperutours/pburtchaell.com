import React from 'react';
import Text, { types } from './index';

describe(Text.name, () => {
  const DEFAULT_CHILD = 'foo';

  it('should render h1 element', () => {
    expect(shallow(
      <Text type={types.HEADER_1}>
        My title
      </Text>
    )).toMatchSnapshot();
  });

  it('should render h2 element', () => {
    expect(shallow(
      <Text type={types.HEADER_2}>
        {DEFAULT_CHILD}
      </Text>
    )).toMatchSnapshot();
  });

  it('should render h3 element', () => {
    expect(shallow(
      <Text type={types.HEADER_3}>
        {DEFAULT_CHILD}
      </Text>
    )).toMatchSnapshot();
  });

  it('should render paragraph element', () => {
    expect(shallow(
      <Text type={types.BODY}>
        {DEFAULT_CHILD}
      </Text>
    )).toMatchSnapshot();
  });
});
