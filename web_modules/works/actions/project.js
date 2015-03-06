import { Actions } from 'flummox';

export default class ProjectActions extends Actions {

  /**
   * @function get
   * @param {string} id The project id
   * @fires dispatch
   */
  getProject(id) {
    let project = severGetProject(id);
    return project;
  }

  /**
   * @function getAll
   * @fires dispatch
   */
  getAllProjects() {
    let projects = serverGetProjects();
    return projects;
  }

  /**
   * @function create
   * @param {object} data The project data
   * @fires dispatch
   */
  createProject(data) {
    return data;
  }

  /**
   * @function update
   * @param {string} id The project to update
   * @param {object} data The data to update
   * @fires dispatch
   */
  updateProject(id, data) {
    return id;
  }

  /**
   * @function delete
   * @param {string} id The project to delete
   * @fires dispatch
   */
  delete(id) {
    return id;
  }

}
