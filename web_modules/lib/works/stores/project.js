import Marty from 'marty';
import Constants from '../constants/project';

let Store = Marty.createStore({

  name: 'entry',

  displayName: 'entry',

  handlers: {
    get: Constants.PROJECT_GET,
    getAll: Constants.PROJECT_GET_ALL,
    create: Constants.PROJECT_POST,
    update: Constants.PROJECT_PUT,
    'delete': Constants.PROJECT_DELETE
  },

  getInitialState() {
    return {
      //reference: new Firebase('https://pburtchaell-1.firebaseio.com/data/web/projects')
    };
  },

  refreshState() {
    this.state.reference.on('value', function (snapshot) {
      console.log(snapshot);
      debugger;
    }.bind(this));
  },

  _encode(url) {},

  get() {
    this.state.reference()
  },

  getAll() {},

  create(data) {

    var data = {
      title: '',
      date: '',
      body: '',
      images: []
    }

    /*var project = this.state.reference.push(data, function (error) {
      if (!error) {
        // do something
      } else {
        // handle error
      }
    }.bind(this));*/

    //var key = newPostRef.key();

    //return key;

  },

  update() {},

  'delete'() {}

});

export default Store;
