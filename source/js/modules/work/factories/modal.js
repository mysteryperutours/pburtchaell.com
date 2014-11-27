/**
 * @documentation https://www.npmjs.org/package/angular-modal
 */
module.exports = function (btfModal) {
  return btfModal({
    controller: 'MyModalCtrl',
    controllerAs: 'modal',
    templateUrl: 'my-modal.html'
  });
};
