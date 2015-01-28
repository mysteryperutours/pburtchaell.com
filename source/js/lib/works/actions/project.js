var Marty = require('marty');
var Constants = require('../constants/project');
var Analytics = require('../utils/analytics');

module.exports = Marty.createActionCreators({
  
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