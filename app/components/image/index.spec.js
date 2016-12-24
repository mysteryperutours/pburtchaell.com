import React from 'react';
import Image from './index';

describe(Image.name, () => {
  it('should render component', () => {
    expect(shallow(
      <Image
        src="http://path/to/image"
        alt="Foo"
        height="0"
        width="0"
      />
    )).toMatchSnapshot();
  });
});
