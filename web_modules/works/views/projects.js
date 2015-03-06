import React from 'react';
import { State } from 'react-router';
import Immutable from 'immutable';
import Item from 'works/compontents/item';

var ProjectsViews = React.createClass({
  render() {
    return (
      <View>
        {this.props.items.map( =>
          (<Item {...item}/>);
        )}
      </View>
    );
  }
});

export default ProjectsView;
