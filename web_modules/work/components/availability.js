import React from 'react';
import Month from 'work/components/month';

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

let Section = React.createClass({

  mixins: [SetIntervalMixin],

  _change() {
    if (this.state.paused === false) {
      var i = this.state.active;

      if (i > 11) {
        i = 0;
      } else {
        i++;
      }

      this.setState({
        active: i
      });
    } else {
      return;
    }
  },

  _pause() {
    this.setState({
      paused: true
    });
  },

  _continue() {
    this.setState({
      paused: false
    });
    this._change();
  },

  componentDidMount() {
    this.setInterval(this._change, 1500); // Call a method on the mixin
  },

  getInitialState() {
    return {
      active: 0,
      paused: false,
      months: [
        { key: 0, name: 'January', availability: false },
        { key: 1, name: 'February', availability: false },
        { key: 2, name: 'March', availability: false },
        { key: 3, name: 'April', availability: false },
        { key: 4, name: 'May', availability: false },
        { key: 5, name: 'June', availability: false },
        { key: 6, name: 'July', availability: false },
        { key: 7, name: 'August', availability: false },
        { key: 8, name: 'September', availability: false },
        { key: 9, name: 'October', availability: false },
        { key: 10, name: 'November', availability: false },
        { key: 11, name: 'December', availability: false }
      ]
    };
  },

  render() {
    return (
      <ul className="available-months" onMouseEnter={this._pause} onMouseLeave={this._continue}>
        {this.state.months.map(function(month) {

          var isActive = false;

          if (month.key === this.state.active) {
            isActive = true;
          }

          return (
            <Month
              key={month.key}
              active={isActive}
              availability={month.availability}
              name={month.name}
            />
          );

        }.bind(this))}
      </ul>
    );
  }

});

export default Section;
