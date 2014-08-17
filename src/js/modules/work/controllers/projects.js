/**
 * 
 */

/** 
 * Root
 * @description A root reference to the Firebase database.
 */
var utils = require('../utils');

module.exports = function ($scope, $http) {

  var root = utils.root;
  
  /**
   * Get the data from firebase and on success, use the data for the
   * portfolio items. If the connection fails...
   */
  $http({
    method: 'GET',
    url: root + 'items.json'
  })
  .success(function (data, status, headers, config) {
    $scope.items = data;
    handle.success('Connection to database successful.');
  })
  .error(function (data, status, headers, config) {
    handle.error([
      'A connection to the projects database could not be made.', headers
      ], function (){
      // Error handle code to interact with DOM
    });
  });

  $scope.orderProp = 'date';
};