import Marty from 'marty';
import Constants from 'works/constants/project';
import Analytics from 'works/utils/analytics';

let Actions = Marty.createActionCreators({

  /**
   * @function get
   * @param {string} id The project id
   * @para {function} callback
   * @fires dispatch
   */
  get: Constants.PROJECT_GET(function (id, callback) {
    this.dispatch(id, callback);
  }),

  /**
   * @function getAll
   * @para {function} callback
   * @fires dispatch
   */
  getAll: Constants.PROJECT_GET_ALL(function (callback) {
    this.dispatch(callback);
  }),

  /**
   * @function create
   * @param {object} data The project data
   * @para {function} callback
   * @fires dispatch
   */
  create: Constants.PROJECT_POST(function (data, callback) {
    this.dispatch(data, callback);
    if (development) {
      console.log(data);
    }
    //Analytics.track('Project created', data);
  }),

  /**
   * @function update
   * @param {string} id The project to get
   * @param {object} data The project to get
   * @para {function} callback
   * @fires dispatch
   */
  update: Constants.PROJECT_PUT(function (id, data, callback) {
    this.dispatch(id, data, callback);
    //Analytics.track('Project updated', data);
  }),

  /**
   * @function delete
   * @param {string} id The project to delete
   * @para {function} callback
   * @fires dispatch
   */
  'delete': Constants.PROJECT_DELETE(function (id, callback) {
    this.dispatch(callback);
  }),

});

export default Actions;
