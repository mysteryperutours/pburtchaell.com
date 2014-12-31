/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var firebase = require('firebase');
var Heart = require('./heart.js');
var Counter = require('./counter.js');

var Liker = React.createClass({

  /**
   * @function load
   * @description Load likes from Firebase reference.
   */
  load: function () {
    var ref = new Firebase('https://liker.firebaseio.com');
    ref.on('value', function (snap) {
      var items = [];

      snap.forEach(function (itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.name();
        items.push(item);
      });

      this.setState({
        items: items
      })

    }.bind(this));
  },

  /**
   * @function create
   * @description Push data to the Firebase.
   * @param {object} data 
   * @param {string} page 
   */
  create: function (data, page) {
    var ref = new Firebase('https://liker.firebaseio.com/likes');
    ref.push(data);
  },

  /**
   * @function destroy
   * @description Remove an item from the Firebase.
   * @param {string} id - ID of the item to be removed.
   * @param {string} page 
   */
  destroy: function (id, page) {
    var ref = new Firebase('https://liker.firebaseio.com/likes/' + page + id);
    ref.remove(function (error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log('Synchronization succeeded');
      }
    });
  },

  clickHandler: function (e) {
    console.log(this.refs.email.getDOMNode().value);
    var newEmail = this.refs.email.getDOMNode().value;
    var newEmails = this.state.users.concat([newEmail]);
    this.setState({
      users: newEmails
    });
  },

  componentDidMount: function () {
    this.load();
  },

  getInitialState: function () {
    return {
      likes: []
    }
  },

  render: function () {
    return (
      <div>
        <input ref="email" type="text"/>
        <button onClick={this.clickHandler}>go</button>
        <Heart />
        <Counter value="0" label="likes"/>
      </div>
    )
  }

});

module.exports = Liker;
