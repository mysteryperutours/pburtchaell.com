// @flow
import React, { Element } from 'react';

type Props = {
  children: Element<*>
}

const AppRoot = (props: Props) => (
  <main className="app-root">
    {props.children}
  </main>
);

export default AppRoot;
