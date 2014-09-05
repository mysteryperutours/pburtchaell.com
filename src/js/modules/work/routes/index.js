module.exports = function ($stateProvider, $urlRouterProvider) {
  'use strict';
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
  
  /**
   * '/'
   * @description The Main page
   */
  .state('main', {
    url: '^/',
    templateUrl: '../assets/js/work/views/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })

     /**
     * '/projects'
     * @description A grid layout of all projects.
     */
    .state('main.projects', {
      url: '^/projects',
      templateUrl: '../assets/js/work/views/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'projects'
    })

    /**
     * '/project/:id'
     * @description A page for each project is available based of the project ID.
     */
    .state('id', {
      url: '^/projects/id/:id',
      templateUrl: '../assets/js/work/views/project.html',
      controller: 'ProjectController',
      controllerAs: 'project'
    })

    /**
     * '/about'
     * @description
     */
    .state('main.about', {
      url: '^/about',
      templateUrl: '../assets/js/work/views/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    });

};
