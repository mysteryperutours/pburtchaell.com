import React from 'react';
import autobind from 'autobind-decorator';
import Month from './month';
import Section from './section';

/**
 * @class Availability
 * @description A section that shows my availability for the year.
 */
export default class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      paused: false,
    };
  }

  @autobind
  componentWillMount() {
    this.intervals = [];
  }

  @autobind
  componentDidMount() {
    this.setInterval(this.handleChange, 1500); // Call a method on the mixin
  }

  @autobind
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }

  @autobind
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  /**
   * @function handleChange
   * @description Changes the active month.
   * @fires context#setState
   */
  @autobind
  handleChange() {
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
  }

  /**
   * @function handleOnMouseEnter
   * @description Pauses the availablity slider.
   * @fires context#setState
   */
  @autobind
  handleOnMouseEnter() {
    this.setState({
      paused: true
    });
  }

  /**
   * @function handleOnMouseLeave
   * @description Continues the availablity slider.
   * @fires context#setState
   */
  @autobind
  handleOnMouseLeave() {
    this.setState({
      paused: false
    });
    this.handleChange();
  }

  render() {
    const months = [
      { key: 0, name: 'January', availability: false },
      { key: 1, name: 'February', availability: false },
      { key: 2, name: 'March', availability: false },
      { key: 3, name: 'April', availability: false },
      { key: 4, name: 'May', availability: true },
      { key: 5, name: 'June', availability: true },
      { key: 6, name: 'July', availability: true },
      { key: 7, name: 'August', availability: true },
      { key: 8, name: 'September', availability: false },
      { key: 9, name: 'October', availability: false },
      { key: 10, name: 'November', availability: false },
      { key: 11, name: 'December', availability: false }
    ];

    return (
      <Section name="availability" theme="black">
        <div className="row">
          <div className="col col-l-12 col-s-12">
            <small><h4><b>January-December 2015</b></h4></small>
              <ul className="available-months"
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseLeave}>
                {months.map(function(month) {
                  let isActive = false;

                  if (month.key === this.state.active) isActive = true;

                  return (
                    <Month
                      key={month.key}
                      active={isActive}
                      availability={month.availability}
                      name={month.name} />
                  );
                }.bind(this))}
            </ul>
          </div>
        </div>
      </Section>
    );
  }
}
