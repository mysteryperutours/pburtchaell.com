/** @jsx React.DOM */

var React = require('react');
var Input = require('react-input');

var ProjectActionCreator = require('../../actions/project');

var Router = require('react-router');
var Redirect = Router.Redirect;
var Link = Router.Link;

var DashboardView = React.createClass({

  mixins: [Router.Navigation],

  /**
   * @private
   */
  _reset: function (callback) {
    try {
      this.refs.name.reset();
      this.refs.date.reset();
      this.refs.type.reset();
      this.refs.image.reset();
      callback(null); //done
    } catch (error) {
      callback(error);
    }
  },

    /**
   * @private
   */
  _notify: function () {
    this.refs.notification.open();
  },

  /**
   * @private
   */
  _submit: function (event) {

    event.preventDefault();

    var name = this.refs.name;
    var date = this.refs.date;
    var type = this.refs.type;

    ProjectActionCreator.create('', function () {

      // Set the state
      this.setState({
        notification: ''
      });

      // Notify that the form was created
      this._notify('', function () {
        return;
      });

      // Reset the forms
      this._reset();

    }.bind(this));

    return;

  },

  componentDidMount: function () {
    this.refs.name.focus();
  },

  getInitialState: function () {
    return {
      isLoggedIn: true
    };
  },

  render: function() {

    if (!this.state.isLoggedIn) {
      this.transitionTo('signin');
    } else {
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
                  placeholder="test"
                  label="A description for the project"
                  disabled={false}
                  type="text"
                />
                <Input
                  ref="type"
                  placeholder="test"
                  label="A project type"
                  disabled={false}
                  type="text"
                />
                <Input
                  ref="type"
                  placeholder="test"
                  label="enter some text"
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

  }

});

module.exports = DashboardView;
