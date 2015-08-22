import './availability.less';
import React from 'react';
import Month from './month';
import Section from 'components/layout/section';

/**
 * @class Availability
 * @description A section that shows my availability for the year.
 */
export default class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      paused: false
    };
  }

  componentDidMount = () => {
    setInterval(this.handleChange, 1500); // Call a method on the mixin
  }

  /**
   * @function handleChange
   * @description Changes the active month.
   * @fires context#setState
   */
  handleChange = () => {
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
    }
  }

  /**
   * @function handleOnMouseEnter
   * @description Pauses the availablity slider.
   * @fires context#setState
   */
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
      { key: 4, name: 'May', availability: false },
      { key: 5, name: 'June', availability: false },
      { key: 6, name: 'July', availability: false },
      { key: 7, name: 'August', availability: false },
      { key: 8, name: 'September', availability: 'null' },
      { key: 9, name: 'October', availability: 'null' },
      { key: 10, name: 'November', availability: 'null' },
      { key: 11, name: 'December', availability: 'null' }
    ];

    return (
      <Section name="availability" theme="black">
        <div className="row">
          <div className="col col-l-12 col-s-12">
            <h4>Let's work together</h4>
            <h6 className="text-align-center">January - December 2015</h6>
              <ul className="available-months"
                onMouseEnter={::this.handleOnMouseEnter}
                onMouseLeave={::this.handleOnMouseLeave}
              >
                {months.map(month => {
                  let isActive = month.key === this.state.active ? true : false;

                  return (
                    <Month
                      key={month.key}
                      active={isActive}
                      availability={month.availability}
                      name={month.name} />
                  );
                })}
            </ul>
          </div>
        </div>
      </Section>
    );
  }
}
