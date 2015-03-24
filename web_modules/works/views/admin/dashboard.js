import React from 'react';
import Input from 'react-input';
import Notification from 'react-notification';
import { Link, Redirect, Navigation } from 'react-router';

let DashboardView = React.createClass({

  mixins: [Navigation],

  /**
   * @private
   */
  _reset() {
    this.name.reset();
    this.date.reset();
    this.type.reset();
    this.image.reset();
  },

  /**
   * @private
   */
  _notify() {
    this.notification.show();
  },

  /**
   * @private
   */
  _submit(event) {

    event.preventDefault();

    let name = this.name.value();
    let desc = this.description.value();
    let date = this.date.value();
    let type = this.type.value();

    this._notify();

  },

  componentDidMount() {
    this.refs.name.focus();
  },

  render() {
    return (
      <main className="page view-dashboard">
        <header className="page-header">
            <nav className="page-nav" role="navigation">
            <ul className="nav-items">
              <li className="nav-item"><Link to="signin">New Project</Link></li>
              <li className="nav-item"><Link to="signin">View Projects</Link></li>
            </ul>
          </nav>
        </header>
        <header className="default-header">
          <hgroup>
            <h1>New Project</h1>
          </hgroup>
        </header>
        <section className="default-content">
          <div className="row">
            <form className="col col-l-12">
              <Input
                ref={(c) => this.name = c}
                label="Project name"
                value={this.state.current.name}
                type="text" />
              <Input
                ref={(c) => this.date = c}
                label="Project Date"
                value={this.state.current.date}
                type="text" />
              <Input
                ref={(c) => this.type = c}
                label="Project Type"
                value={this.state.current.type}
                type="text" />
              <Input
                ref={(c) => this.description = c}
                value={this.state.current.description}
                label="Project Description"
                type="text" />
            </form>
          </div>
        </section>
      </main>
    );
  }

});

export default DashboardView;
