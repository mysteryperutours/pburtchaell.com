import React from 'react';
import Month from 'work/components/month';

let Section = React.createClass({

  getInitialState() {
    return {
      months: [
        { name: 'January', availability: false },
        { name: 'February', availability: false },
        { name: 'March', availability: false },
        { name: 'April', availability: false },
        { name: 'May', availability: false },
        { name: 'June', availability: false },
        { name: 'July', availability: false },
        { name: 'August', availability: false },
        { name: 'September', availability: false },
        { name: 'October', availability: false },
        { name: 'November', availability: false },
        { name: 'December', availability: false }
      ]
    };
  },

  render() {
    return (
      <ul className="available-months">
        {this.state.months.map(month =>
          <Month
            availability={month.availability}
            name={month.name}
          />
        )}
      </ul>
    );
  }

});

export default Section;
