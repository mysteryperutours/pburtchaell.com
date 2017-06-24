import React from 'react';
import Row from './index';

describe(Row.name, () => {
  it('should render component with default sized row', () => {
    expect(shallow(
      <Row />
    )).toMatchSnapshot();
  });

  it('should render component with large sized row', () => {
    expect(shallow(
      <Row size="large" />
    )).toMatchSnapshot();
  });

  it('should render component with medium sized row', () => {
    expect(shallow(
      <Row size="medium" />
    )).toMatchSnapshot();
  });
});
