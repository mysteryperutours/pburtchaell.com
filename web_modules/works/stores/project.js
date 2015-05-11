import { Store } from 'flummox';
import Immutable from 'immutable';

export default class ProjectStore extends Store {

  constructor(flux) {

    super();

    let actions = flux.getActions('project');

    this.register(actions.getProject, this.handleGetProject);
    this.register(actions.createProject, this.handleCreateProject);
    this.register(actions.updateProject, this.handleUpdateProject);
    this.register(actions.deleteProject, this.handleDeleteProject);

    /**
     * @object context#defaults
     * @description Default state.
     */
    this.defaults = {
      projects: Immutable.Map(), // A collection of projects
      index: Immutable.Map() // The current project
    };

    /**
     * @object context#state
     * @description The initial state of the store. Flux will attempt
     * to check localStorage for a persistent store, but if one does
     * not exist, it will use the defaults.
     */
    this.state = JSON.parse(localStorage.getItem('projects')) || this.defaults;

    // Update localStorage
    localStorage.setItem('projects', JSON.stringify(this.state));

  }

  handleGetProject(data) {
    this.setState({
      index: data
    });
    localStorage.setItem('projects', JSON.stringify(this.state));
  }

  handleCreateProject() {

  }

  handleUpdateProject() {

  }

  handleDeleteProject() {

  }

}
