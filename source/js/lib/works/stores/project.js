var Marty = require('marty');
var Firebase = require('firebase');
var Constants = require('../constants/project');

var Store = Marty.createStore({

  name: 'entry',
  
  displayName: 'entry',

  handlers: {
    get: Constants.PROJECT_GET,
    getAll: Constants.PROJECT_GET_ALL,
    create: Constants.PROJECT_POST,
    update: Constants.PROJECT_PUT,
    'delete': Constants.PROJECT_DELETE 
  },

  getInitialState: function () {
    return {
      reference: new Firebase('https://pburtchaell-1.firebaseio.com/data/web/projects')
    };
  },

  refreshState: function () {
    this.state.reference.on('value', function (snapshot) {
      console.log(snapshot);
      debugger;
    }.bind(this));
  },

  _encode: function (url) {

  },

  get: function () {
    this.state.reference()
  },

  getAll: function () {

  },

  create: function (data) {

    var data = {
      title: '',
      date: '',
      body: '',
      images: []
    }

    var project = this.state.reference.push(data, function (error) {
      if (!error) {
        // do something
      } else {
        // handle error
      }
    }.bind(this));

    debugger;

    var key = newPostRef.key();

    return key;

  },

  update: function () {

  },

  'delete': function () {
    
  }

});

module.exports = Store;
