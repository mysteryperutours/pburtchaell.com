import React from 'react';
import Row from './index';

describe(Row.name, () => {
  it('should render component', () => {
    expect(shallow(
      <Row />
    )).toMatchSnapshot();
  });
});
