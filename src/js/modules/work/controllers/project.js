/**
 * 
 */


module.exports = function ($scope, $stateParams, $http) {
 
  var root = 'https://pburtchaell-work.firebaseio.com/';

  $scope.id = $stateParams.id;
  
  $http.get(root + 'items/' + $scope.id +'.json').success(function (data) {
    $scope.project = data;
  });

  $scope.next = 2;

  /*function next () {
    $scope.next = (parseInt($scope.id) + 1);

    function test () {
      $http.get(root + 'items/' + $scope.next + '/title.json' );
    }

    test();

    $http.get(root + 'items/' + $scope.next + '.json').success(function (data) {
      $scope.project.next = data;
    });
  }

  next();

  $scope.load = function () {

    /**
     * @object cls
     * @desc Classes used for the current and next project items.
     *
    var cls = {
      current: 'portfolio-page--current',
      next: 'portfolio-page--next'
    };

    /**
     * @object el
     * @desc Selectors for the two projects.
     *
    var el = {
      current: document.querySelectorAll('.' + cls.current)[0],
      next: document.querySelectorAll('.' + cls.next)[0]
    };

    function init (params, cb) {
      el.next.classList.remove(cls.next);
      el.next.classList.add(cls.current);
      el.current.classList.remove(cls.current);
      el.current.classList.add(cls.next);
      cb();
    }

    init(['',''], function () {
      $scope.project = $scope.project.next;
      $location.path('/project/' + $scope.next);
    }).deb();
 
  };*/

  /**
   * Having some fun with the ShadowDOM and web components.
   *
  var projectTitlePrototype = Object.create(HTMLElement.prototype);

  window.MyElement = document.registerElement('project-title', {
    prototype: projectTitlePrototype
    // other props
  });

  var template = document.querySelector('#project-title');
  template.querySelector('.project-page--title').textContent = $scope.project.title;
  template.querySelector('.portfolio-page--description').textContent = $scope.project.description;
  document.body.appendChild(template);
  */

};
