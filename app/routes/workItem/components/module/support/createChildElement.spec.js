import { Children } from 'react';
import createChildElement from './createChildElement';
import types from './types';

describe(createChildElement.name, () => {
  it('should return a single child element of type Text', () => {
    const element = createChildElement({
      type: 'text',
      children: 'Foo'
    });

    expect(mount(element)).toMatchSnapshot();
  });

  it('should return a single child element of type Image', () => {
    const element = createChildElement({
      type: 'image',
      meta: {
        src: 'https://path/to/image.png',
        alt: 'Foo',
        height: 500,
        width: 700
      }
    });

    expect(mount(element)).toMatchSnapshot();
  });
});
