/**
 * 
 */

module.exports = function ($scope, $http, database) {

  //var root = utils.root;
  
  /**
   * @object items
   * @description Project items for the portfolio.
   */
  $scope.items = {};

  //console.log('ProjectsController');

  // Make sure localStorage is supported.
  //if (!window.localStorage) {

    // Get the items from localStorage.
    //$scope.items = localStorage['projects'];

    /**
     * If there is nothing in localStorage, then
     * get the items from the database.
     */
    //if ($scope.items = undefined) {

  
  console.log(
    database.get('items',{
      save: true
    })
  );

  $scope.items = database.get('items', {
    save: true
  });

  $scope.orderProp = 'date';
};