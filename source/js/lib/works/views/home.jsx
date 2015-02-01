/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty');
var windex = require('windex');

var Router = require('react-router');
var Link = Router.Link;

var Menu = require('../components/menu');
var Item = require('../components/item');

var HomeView = React.createClass({

  mixins: [
    ''
  ],

  _open: function (event) {

    // Prevent any default actions.
    event.preventDefault();

    // Get the target DOM node.
    var target = event.target.value;

    var item = this.refs.target;

    var element = item.getDOMNode();

    /**
     * Animate the item
     */
    var player = element.animate([
      { 'transform': value0 },
      { cssProperty: value1 },
      { cssProperty: value2 },
    ], {
        duration: 600,
        iterations: 1,
        delay: 50
    });

    player.onFinish = function (event) {

    };

    /**
     * @private
     * @function AnimationEnd
     * @description When all CSS animations are completed,
     * animate the body down 100%.
     *
    var AnimationEnd = function () {

      windex.scrollTo(document.body, windex.height, 600, function () {
        console.log('done');
      }.bind(this));

    }.bind(this);

    // Add an animation event listener
    node.addEventListener('animationend', AnimationEnd);*/

    return; // done

  },

  getInitialState: function () {
    return {
      title: 'Patrick Burtchaell',
      subtitle: 'Designer & developer from New Orleans',
      menuItems: [
        {
          title: 'About',
          route: 'about',
          onClick: function () {
            return;
          }
        },
        {
          title: 'Contact',
          route: '',
          onClick: function () {
            return;
          }
        }
      ],
      items: [
        {
          key: 1,
          title: 'Foo',
          description: 'This is foo',
          content: 'lol',
          date: '',
          medium: '',
          client: '',
          color: '039BE5',
          active: false
        },
        {
          key: 2,
          title: 'Bar',
          description: 'This is bar',
          content: 'lol2',
          color: 'F57F17',
          active: false
        },
        {
          key: 3,
          title: 'Baz',
          description: 'This is baz',
          content: 'lol3',
          color: 'E65100',
          active: false
        }
      ]
    };
  },

  render: function () {
    return (
     <div>
      <main className="portfolio-view">
        <section className="portfolio-hero">
          <hgroup className="portfolio-hero-hgroup">
            <div className="row row-large">
              <div className="col col-l-12 col-s-12">
                <h1 className="portfolio-hero-title">{this.state.title}</h1>
                <h2 className="portfolio-hero-subtitle">{this.state.subtitle}</h2>
              </div>
              <div className="col col-l-6 col-s-6">
                <hr />
                <div className="portfolio-statement">I am developer and designer with a passion taking abstract, conceptual ideas and transforming them into great user-centric products.</div>
                <a href="" className="portfolio-hero-link" onClick={this._scroll}>Work with me</a>
              </div>
              <div className="col col-l-2 col-s-6">
              </div>
            </div>
          </hgroup>
        </section>

        <section className="portfolio-section">
          <div className="row row-full-width">
            <div className="col col-l-12">

              {this.state.items.map(function (item) {
                return (
                  <Item
                    key={item.key}
                    title={item.title}
                    description={item.description}
                    content={item.content}
                    date={item.date}
                    medium={item.medium}
                    client={item.client}
                    color={item.color}
                    active={item.active}
                  />
                );
              })}

            </div>
          </div>
        </section>{/* end .portfolio-section */}

      </main>
    </div>
    )
  }

});

module.exports = HomeView;
