/**
 * 
 */

module.exports = function ($scope, $rootScope, $location, $stateParams, $http) {
  $rootScope.$on("$routeChangeStart", function (args){
    console.clear();
  });

  $scope.id = $stateParams.id;
  $scope.title = 'Projects';
  
  /**
   * @object projects
   * @description The project data for the portfolio entry.
   */
  $scope.project = { };

  // Clear data store in localStorage if true.
  $scope.reset = true;

  // localStorage key to use -> localStorage[key].
  var key = 'projects';

  // The data to be retrieved form localStorage.
  var data = localStorage[key];

  /** 
   * @funcion getProject
   * Get the items from localStorage, if they exist; if they do
   * not exist, grab the data from the database.
   */
  $scope.getProject = function (id, callback) {
    if (data === undefined) {
      $database.get('item/' + parseInt(id), {
        save: true
      }, function () {
        $scope.projects = JSON.parse(data);
        $scope.project = $scope.projects[id];
      });

    } else {
      if ($rootScope.reset) {
        delete data;
      }
      $scope.projects = JSON.parse(data);
      $scope.project = $scope.projects[id];
    }

    callback();
  }

  $scope.getProject($scope.id, function () {

    /**
     * @function getNextProject
     * @param {number} id number value for the current page
     */
    $scope.getNextProjectId = function (id, callback) {

      //if ($scope.project != undefined) console.group($scope.project.title);

      // The inital value of $scope.next is the $scope.id.
      $scope.next = parseInt(id);

      console.log('Current page id: ' + $scope.next);
      
      if ($scope.next >= $scope.projects.length) {
        $scope.next = 0;
      } else {
        $scope.next++;
      }

      console.log('Next page id: ' + $scope.next);
      console.log('Total number of pages: ' + $scope.projects.length);
      if ($scope.project.title != undefined) console.groupEnd();
    };

    //$scope.getNextProjectId($scope.id);
  })
};
