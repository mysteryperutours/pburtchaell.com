/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty');

var windex = require('windex');
var Item = require('../components/item');

var Router = require('react-router');
var Link = Router.Link;

var ProjectsView = React.createClass({

  mixins: [Router.Navigation],

  getInitialState: function () {
    return {
      loading: false,
      items: [
        {
          key: 1,
          title: 'Foo',
          description: 'This is foo. It is a pretty nice project.',
          content: 'lol',
          date: '',
          medium: '',
          client: '',
          color: '039BE5',
          imageTitle: 'Foo Image',
          imageDescription: 'This is a foo image',
          imageSrc: 'http://storage.pburtchaell.com/2014/designs/Project-2014_January-01.jpg',
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

  compontentWillMount: function () {
    this.setState({
      loading: true
    });
  },

  componentDidMount: function () {
  },

  render: function () {
    if (this.state.loading) {
      return (
        <h1>Loading</h1>
      );
    } else if (!this.state.loading) {
      return (
        <div>
          <main className="portfolio-view">

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
                        imageTitle={item.imageTitle}
                        imageDescription={item.imageDescription}
                        imageSrc={item.imageSrc}
                        active={item.active}
                      />
                    );
                  })}

                </div>
              </div>
            </section>{/* end .portfolio-section */}

          </main>
        </div>
      );
    }
  }

});

module.exports = ProjectsView;
