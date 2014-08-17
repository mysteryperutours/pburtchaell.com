/**
 * See: http://adamalbrecht.com/2013/12/12/creating-a-simple-modal-dialog-directive-in-angular-js/
 * And: https://github.com/adamalbrecht/ngModal
 * 
 * A directive (checkout my post on Directives from existing scripts/plugins) in it's simplest form is a small piece of templated HTML, preferably used multiple times throughout an application where needed.
 */
app.directive('modalDialog', function() {
  return {
    /*
     * restrict: This goes back to usage, how do we restrict the element's usage? If you're using a project that needs legacy IE support, you'll probably need attribute/class declarations. Restricting as 'A' means you restrict it as an Attribute. 'E' for Element, 'C' for Class and 'M' for Comment. These have a default as 
     */
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: '...' // See below
  };
});