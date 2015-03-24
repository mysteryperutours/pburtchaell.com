import React from 'react';
import View from 'works/components/view';

export default class ErrorView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <h1>Error</h1>
      </View>
    );
  }

};

