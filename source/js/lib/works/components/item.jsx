/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

var Carousel = require('./carousel');

var Item = React.createClass({

  mixins: [classes],

  /**
   * @function open
   * @description Open the item
   */
  open: function () {
    this.setState({
      active: true
    });
  },

  /**
   * @function close
   * @description Close the item
   */
  close: function () {
    this.setState({
      active: false
    });
  },

  /**
   * @private
   * @function handle
   */
  _handle: function (event) {

    event.preventDefault();

    if (this.state.active) {
      this.close();
    } else if (!this.state.active) {
      this.open();
    } else {
      return;
    }

  },

  /**
   * @private
   * @function shade
   * @description Create a new shade of a color.
   * @param {string} color The seven character hex of the color
   * @param {number} percent The amount to darken/lighten the color
   * @returns {string} The new shade
   */
  _shade: function (color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  },

  propTypes: {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    date: React.PropTypes.string,
    medium: React.PropTypes.string,
    client: React.PropTypes.string,
    color: React.PropTypes.string,
    images: React.PropTypes.array,
    active: React.PropTypes.bool
  },

  getInitialState: function () {
    return {
      active: this.props.active
    };
  },

  getDefaultProps: function () {
    return {
      title: '',
      description: '',
      content: '',
      date: '',
      medium: '',
      client: '',
      color: 'eeeeee',
      images: [],
      active: false
    };
  },

  render: function() {

    var classes = this.getClass('portfolio-item', {
      'active': this.state.active
    });

    if (!this.state.active) {
      var styles = {
        backgroundColor: '#' + this.props.color,
        color: this._shade('#' + this.props.color, -0.5)
      };
    } else {
      var styles = {
        backgroundColor: '#' + this.props.color,
        color: this._shade('#' + this.props.color, -0.7)
      };
    }

    return (
        <section
          className={classes}
          style={styles}
          onClick={this._handle}>

          <div className="portfolio-column column-left">
            <header className="portfolio-item-header">
              <h1 className="portfolio-item-title">{this.props.title}</h1>
              <h2 className="portfolio-item-subtitle">{this.props.description}</h2>
              <hr />
            </header>
            <article className="portfolio-item-content">
              <p>{this.props.content}</p>
            </article>
            <footer className="portfolio-item-footer">
              <div className="portfolio-item-detail">
                <div className="portfolio-item-detail-wrapper">
                  <span className="item-detail-key"><b>Date:</b></span>
                  <span className="item-detail-value">{this.props.date}</span>
                </div>
              </div>
              <div className="portfolio-item-detail">
                <div className="portfolio-item-detail-wrapper">
                  <span className="item-detail-key"><b>Medium:</b></span>
                  <span className="item-detail-value">{this.props.medium}</span>
                </div>
              </div>
              <div className="portfolio-item-detail">
                <div className="portfolio-item-detail-wrapper">
                  <span className="item-detail-key"><b>Client:</b></span>
                  <span className="item-detail-value">{this.props.client}</span>
                </div>
              </div>
            </footer>
          </div>

          <div className="portfolio-column column-right">
            <Carousel
              title={this.props.imageTitle}
              description={this.props.imageDescription}
              src={this.props.imageSrc}
              background={this._shade('#' + this.props.color, -0.2)}
            />
          </div>

        </section>
    );
  }

});

module.exports = Item;
