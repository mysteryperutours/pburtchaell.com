import React from 'react';
import Module from './index';
import types from './support/types';

const MOCK_MODULE_MEDIA = {
  type: types.MODULE_MEDIA,
  children: [{
    type: 'image',
    meta: {
      src: 'https://path/to/image.png',
      alt: 'Foo',
      height: 500,
      width: 700
    }
  }]
};

const MOCK_MODULE_TEXT = {
  type: types.MODULE_TEXT,
  children: [{
    type: 'text',
    children: 'Foo'
  }]
};

describe(Module.name, () => {
  it('renders module with type media', () => {
    const component = (
      <Module
        type={MOCK_MODULE_MEDIA.type}
      >
        {MOCK_MODULE_MEDIA.children}
      </Module>
    );

    expect(shallow(component)).toMatchSnapshot();
  });

  it('renders module with type text', () => {
    const component = (
      <Module
        type={MOCK_MODULE_TEXT.type}
      >
        {MOCK_MODULE_TEXT.children}
      </Module>
    );

    expect(shallow(component)).toMatchSnapshot();
  });

  it('renders module with multiple children', () => {
    const component = (
      <Module
        type={MOCK_MODULE_TEXT.type}
      >
        {[MOCK_MODULE_TEXT.children[0], MOCK_MODULE_TEXT.children[0]]}
      </Module>
    );

    expect(shallow(component)).toMatchSnapshot();
  });
});
