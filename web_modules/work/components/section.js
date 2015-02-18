import React from 'react';

let Section = React.createClass({

  getInitialState() {
    return {
      loaded: false
    };
  },

  render() {
    return (
      <div className={`work-${this.props.name}`}>
        {this.props.children}
      </div>
    );
  }

});

export default Section;
