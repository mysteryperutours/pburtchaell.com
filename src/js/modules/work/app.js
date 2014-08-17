'use strict';

// http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/
// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

/**
 * Application
 * @description Initialize the application and the required modules.
 */
require('angular');
require('angular-route');
require('angular-animate');

angular

  .module('work', [
    'ngRoute',
    'ngAnimate'
  ])

  /**!
   * Application Routes
   */
  .config(['$routeProvider', require('./routes')])

  /**!
   * Application Controllers
   */
  .controller('MainController', [
    '$scope', 
    require('./controllers/about')
  ])

  .controller('AboutController', [
    '$scope', 
    require('./controllers/main')
  ])

  .controller('ProjectController', [
    '$scope',
    '$routeParams', 
    '$http', 
    '$location', 
    require('./controllers/project')
  ])

  .controller('ProjectsController', [
    '$scope',
    '$http', 
    require('./controllers/projects')
  ])

  /**! 
   * Application Factories
   */
   .factory('database', require('./factories/database'));
