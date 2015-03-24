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
  handleFormSubmission(event) {

    event.preventDefault();

    let name = this.name.value();
    let desc = this.description.value();
    let date = this.date.value();
    let type = this.type.value();

    this._notify();

  },

  handleProjectEditor() {},

  componentDidMount() {
    this.name.focus();
  },

  getProjectStyles() {
    return {
      background: `url(https://snap-photos.s3.amazonaws.com/img-thumbs/960w/JTTWFDU1S5.jpg)`
    };
  },

  getInitialState() {

    let projects = [
      {
        id: 1,
        name: 'Foo',
        description: 'This is foo',
        type: 'Video',
        date: '1-2-2014'
      },
      {
        id: 2,
        name: 'Bar',
        description: 'This is bar',
        type: 'Design',
        date: '2-3-2014'
      },
      {
        id: 3,
        name: 'Baz',
        description: 'This is baz',
        type: 'Web',
        date: '3-4-2014'
      }
    ];

    return {
      projects: projects,
      current: projects[0]
    };
  },

  render() {
    return (
      <main className="page view-dashboard">

        <section className="dashboard-items-slider">
          <h4><small>All Projects</small></h4>
          <div className="slider-wrapper">
            {this.state.projects.map(project => (
              <div
                key={project.id}
                style={this.getProjectStyles(project.id)}
                className="items-slider-item"
                onClick={this.handleProjectEditor}>
                <span className="items-slider-item-title">{project.name}</span>
              </div>
            ))}
          </div>
        </section>

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
              <button className="btn" type="submit" onClick={this.handleFormSubmission}>Create project</button>
            </form>
          </div>
        </section>

        <Notification styles={true} ref={(c) => this.notification = c} message="Project created" action="Undo" />
      </main>
    );
  }

});

export default DashboardView;
