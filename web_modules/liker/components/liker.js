/** @jsx React.DOM */

import React from 'react';
import classes = 'react-classes';
import firebase = 'firebase';
import Like = 'liker/models';

var Liker = React.createClass({

  mixins: [classes],

  initialize() {
    var path = window.location.pathname.toString();
    var reference = (this.state.base + path);
    this.setState({
      path: path,
      reference: reference
    });
  },

  click(event) {

    event.preventDefault();

    var data = new Like(this.state);

    if (this.state.liked) {

      data.delete(this.state.id);

      this.setState({
        liked: false
      });

      delete data;
      delete this.state.id;

    } else {
      data.push();
      data.store();
      var id = data.getId();
      this.setState({
        id: id,
        liked: true
      });
    }


  },

  listen() {
    var reference = new Firebase(this.state.reference);
    reference.on('value', function (snapshot) {
      var value = snapshot.numChildren();
      this.setState({
        count: value
      });
    }.bind(this));
  },

  componentDidMount() {
    this.initialize();
    this.listen();
  },

  getInitialState() {
    return {
      base: 'https://liker.firebaseio.com/root',
      path: undefined,
      reference: undefined,
      count: 0,
      liked: false
    };
  },

  render() {

    var classes = this.getClass('liker', {
      'liker-clicked': this.state.liked === true
    });

    return (
      <div onClick={this.click} className={classes}>
        <div className="liker-heart">
          <svg x="5px" y="5px" width="30px" height="30px" viewBox="-2 -2 14 12">
            <path d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"></path>
          </svg>
        </div>
        <div className="liker-count">
          {this.state.count}
        </div>
      </div>
    );

  }

});

export default Liker;
