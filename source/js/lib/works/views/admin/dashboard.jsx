/** @jsx React.DOM */

var React = require('react');

var Input = require('react-input');

//var ProjectActionCreator = require('../../actions/project');

var DashboardView = React.createClass({

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

  render: function() {
    return (
      <div className="row">
        <form className="col col-l-12">
          <h1>New Project</h1>
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
            label="enter some text"
            disabled={false}
            type="text"
          />
          <Input
            ref="type"
            placeholder="test"
            label="enter some text"
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
          <button type="submit" onClick={this._submit}/>
        </form>
      </div>
    )
  }

});

module.exports = DashboardView;
