import React from 'react';
import Slider from './index';

describe(Slider.name, () => {
  it('renders component', () => {
    const component = (
      <Slider
        children={[{
          type: 'slide',
          title: 'Foo',
          subtitle: 'Foo 1',
          src: ''
        }, {
          type: 'slide',
          title: 'Bar',
          subtitle: 'Bar 1',
          src: ''
        }]}
      />
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
