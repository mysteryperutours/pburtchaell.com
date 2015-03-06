
  /**
   * @function get
   * @param {string} id The project id
   * @para {function} callback
   * @fires dispatch
   */
    this.dispatch(id, callback);

  /**
   * @function getAll
   * @para {function} callback
   * @fires dispatch
   */
    this.dispatch(callback);

  /**
   * @function create
   * @param {object} data The project data
   * @para {function} callback
   * @fires dispatch
   */
    this.dispatch(data, callback);
    if (development) {
      console.log(data);
    }
  }

  /**
   * @function update
   * @param {string} id The project to get
   * @param {object} data The project to get
   * @para {function} callback
   * @fires dispatch
   */
    this.dispatch(id, data, callback);

  /**
   * @function delete
   * @param {string} id The project to delete
   * @para {function} callback
   * @fires dispatch
   */
    this.dispatch(callback);

