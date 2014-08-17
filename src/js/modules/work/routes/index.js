'use strict';

module.exports = function($routeProvider) {
  $routeProvider
  
  /**
   * '/'
   * @description The Main page
   */
  .when('/', {
    templateUrl: '../assets/js/work/views/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })

  /**
   * '/about'
   * @description
   */
  .when('/about', {
    templateUrl: '../assets/js/work/views/about.html',
    controller: 'AboutController',
    controllerAs: 'about'
  })

  /**
   * '/projects'
   * @description A grid layout of all projects.
   */
  .when('/projects', {
    templateUrl: '../assets/js/work/views/projects.html',
    controller: 'ProjectsController',
    controllerAs: 'projects'
  })

  /**
   * '/project/:id'
   * @description A page for each project is available based of the project ID.
   */
  .when('/project/:id', {
    templateUrl: '../assets/js/work/views/project.html',
    controller: 'ProjectController',
    controllerAs: 'project'
  })
  .when('/projects/:id', { 
    redirectTo: '/project/:id' 
  })
  .when('/project', { 
    redirectTo: '/projects' 
  })

  /**
   * otherwise
   * @description When a route is not found, redirect to the main page.
   */
  .otherwise({
    redirectTo: '/'
  });
}
