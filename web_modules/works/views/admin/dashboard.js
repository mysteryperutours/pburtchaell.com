import React from 'react';
import Input from 'react-input';
import Notification from 'react-notification';
import { Link, Redirect, Navigation } from 'react-router';

let DashboardView = React.createClass({

  mixins: [Router.Navigation],

  /**
   * @private
   */
  _reset() {
    this.refs.name.reset();
    this.refs.date.reset();
    this.refs.type.reset();
    this.refs.image.reset();
  },

  /**
   * @private
   */
  _notify() {
    this.refs.notification.open();
  },

  /**
   * @private
   */
  _submit(event) {

    event.preventDefault();

    let name = this.refs.name.value();
    let desc = this.refs.desc.value();
    let date = this.refs.date.value();
    let type = this.refs.type.value();

    console.log(name, desc, date, type);

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
                ref="name"
                placeholder="Name"
                label="A name for the project"
                disabled={false}
                type="text"
              />
              <Input
                ref="date"
                placeholder="March 20, 2014"
                label="A date for the project"
                disabled={false}
                type="text"
              />
              <Input
                ref="type"
                placeholder="Website"
                label="A project type"
                disabled={false}
                type="text"
              />
              <Input
                ref="desc"
                placeholder="Description"
                label="a project desc"
                disabled={true}
                type="text"
              />
              <button className="btn" type="submit" onClick={this._submit}>Create project</button>
            </form>
          </div>
        </section>
      </main>
    );
  }

});

export default DashboardView;
