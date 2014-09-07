/**
 * @description
 */

module.exports = function ($scope, $http, $rootScope, $database, $handle) {

  /**
   * @object items
   * @description Project items for the portfolio.
   */
  $scope.items = { };

  // Clear data store in localStorage if true.
  $scope.reset = true;

  // localStorage key to use -> localStorage[key].
  var key = 'projects';

  // The data to be retrieved form localStorage.
  var data = localStorage[key];

  /** 
   * Get the items from localStorage, if they exist; if they do
   * not exist, grab the data from the database.
   */
  if (data === undefined) {
    $database.get('items', {
      save: true
    }, function () {
      $scope.items = JSON.parse(data);
    });
  } else {
    if ($rootScope.reset) {
      delete data;
      console.log('test pass');
    }
    $scope.items = JSON.parse(data);
  }

  $scope.orderProp = 'date';
};
