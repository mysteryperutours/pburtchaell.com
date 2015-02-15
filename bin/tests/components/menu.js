var path = '../../../source/js/lib/works/.js';

var React = require('react/addons');
var Menu = require(path);

var utils = React.addons.TestUtils;

jest.dontMock(path);

describe('Menu', function() {

  // Test items for the menu
  var items = [
    {
      title: '',
      route: ''
    }
  ];

  it('opens on hover', function() {

    var checkbox = utils.renderIntoDocument(
      <Menu items={items} />
    );

  });

  it('opens on hover', function() {

    var checkbox = utils.renderIntoDocument(
      <Menu items={items} />
    );

  });

});
