import React from 'react';
import Column from './index';

describe(Column.name, () => {
  it('should render 4 column component', () => {
    expect(shallow(
      <Column largeSize="4" smallSize="4">
        <div />
      </Column>
    )).toMatchSnapshot();
  });

  it('should render 6 column component', () => {
    expect(shallow(
      <Column largeSize="6" smallSize="6">
        <div />
      </Column>
    )).toMatchSnapshot();
  });

  it('should render 8 column component', () => {
    expect(shallow(
      <Column largeSize="8" smallSize="8">
        <div />
      </Column>
    )).toMatchSnapshot();
  });

  it('should render 12 column component', () => {
    expect(shallow(
      <Column>
        <div />
      </Column>
    )).toMatchSnapshot();
  });

  it('should render component that hides on small screens', () => {
    expect(shallow(
      <Column hideOnSmall={true}>
        <div />
      </Column>
    )).toMatchSnapshot();
  });

  it('should render component with unique element type', () => {
    expect(shallow(
      <Column elementType="section">
        <div />
      </Column>
    )).toMatchSnapshot();
  });
});
