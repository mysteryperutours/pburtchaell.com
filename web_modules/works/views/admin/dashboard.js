import React from 'react';
import Input from 'react-input';
import Notification from 'react-notification';
import { Link, Redirect, Navigation } from 'react-router';

export default class DashboardView extends React.Component {

  constructor(props) {

    super(props);

    let projects = [
      {
        id: 0,
        name: 'Foo',
        description: 'This is foo',
        type: 'Video',
        date: '1-2-2014'
      },
      {
        id: 1,
        name: 'Bar',
        description: 'This is bar',
        type: 'Design',
        date: '2-3-2014'
      },
      {
        id: 2,
        name: 'Baz',
        description: 'This is baz',
        type: 'Web',
        date: '3-4-2014'
      }
    ];

    // Get intial component state
    this.state = {
      projects: projects,
      current: projects[0]
    };

    // Component methods
    this.resetForm = this.resetForm.bind(this);
    this.showNotification = this.showNotification.bind(this);
    this.changeProject = this.changeProject.bind(this);
    this.getProjectStyles = this.getProjectStyles.bind(this);

    // Component event handlers
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleProjectEditor = this.handleProjectEditor.bind(this);

  }

  resetForm() {
    this.name.reset();
    this.date.reset();
    this.type.reset();
    this.image.reset();
  }

  showNotification() {
    this.notification.show();
  }

  handleFormSubmission(event) {

    event.preventDefault();

    let name = this.name.value();
    let desc = this.description.value();
    let date = this.date.value();
    let type = this.type.value();

    this.showNotification();

  }

  changeProject(id) {
    var newProject = this.state.projects[id];
    this.setState({
      current: newProject
    });
  }

  handleProjectEditor(id, event) {
    event.preventDefault();
    this.changeProject(id);
  }

  getProjectStyles() {
    return {
      background: `url(https://snap-photos.s3.amazonaws.com/img-thumbs/960w/JTTWFDU1S5.jpg)`
    };
  }

  render() {
    return (
      <main className="page view-dashboard">

        <section className="dashboard-items-slider">
          <h4><small>All Projects</small></h4>
          <div className="slider-wrapper">
            {this.state.projects.map(project =>
              <div
                key={project.id}
                style={this.getProjectStyles(project.id)}
                className="items-slider-item"
                onClick={this.handleProjectEditor.bind(null, project.id)}>
                <span className="items-slider-item-title">{project.name}</span>
              </div>
            )}
          </div>
        </section>

        // @TODO: listen to props and rerender on change. there is some bug in react-input

        <section className="default-content">
          <div className="row">
            <form className="col col-l-12">
            {this.state.current.name}
            {this.state.current.date}
            {this.state.current.type}
            {this.state.current.description}
              <Input
                ref={(c) => this.name = c}
                label="Project name"
                defaultValue={this.state.current.name}
                type="text" />
              <Input
                ref={(c) => this.date = c}
                label="Project Date"
                defaultValue={this.state.current.date}
                type="text" />
              <Input
                ref={(c) => this.type = c}
                label="Project Type"
                defaultValue={this.state.current.type}
                type="text" />
              <Input
                ref={(c) => this.description = c}
                defaultValue={this.state.current.description}
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

}
