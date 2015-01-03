var moment = require('moment');

var data = function (state) {
  this.state = state;
  this.timestamp = '2014';
  this.reference = new Firebase(this.state.base + this.state.path);
};

/**
 * @function push 
 * @description Add a new like to Firebase.
 */
data.prototype.push = function (callback) {
  this.child = this.reference.push(this.timestamp, function (error) {
    if (!error) {
    } else {
    }
  });
  this.id = this.child.toString();
};

/**
 * @function store
 * @description Store the ID for the like to localStorage. 
 */
data.prototype.store = function () {
  localStorage[this.state.path] = JSON.stringify(this.id);
};

/**
 * @function store
 * @description Remove the ID from Firebase and set the 
 * localStorage key to false.
 */
data.prototype.delete = function (id) {
  localStorage[this.state.path] = JSON.stringify(false);
  var reference = new Firebase(id);
  reference.remove();
};

/**
 * @function store
 * @description
 * @param {function} callback
 */
data.prototype.getId = function () {
  return this.id;
};

module.exports = data;
