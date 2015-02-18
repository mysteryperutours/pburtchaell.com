import React from 'react';

let Shot = React.createClass({

  _load() {
    this.setState({
      loaded: true
    });
  },

  componentDidMount() {
    //this._load(this.props.image);
  },

  getInitialState() {
    return {
      loaded: false
    };
  },

  render() {

    let styles = {
      backgroundImage: `url(${this.props.image})`
    };

    return (
      <div className="image-card-wrapper col col-l-4 col-s-12">
        <a href={this.props.link} target="_blank" rel="external">
          <div className="image-card" >
            <div className="image-card-title">{this.props.title}</div>
            <div className="image-card-background"style={styles}></div>
          </div>
        </a>
      </div>
    );
  }

});

export default Shot;
