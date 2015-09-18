import React, { Component } from 'react';

export default class Image extends Component {
  state = {
    isPending: true
  }

  handleLoad = () => {
    return this.setState({
      isPending: !this.state.isPending
    });
  }

  componentDidMount = () => {
    let image = new window.Image();
    image.onload = this.handleLoad;
    image.src = this.props.src;
  }

  render() {
    return (
      <div
        className={this.state.isPending ? 'image-preload-wrapper is-pending' : 'image-preload-wrapper'}
        style={this.state.isPending ? {
          minHeight: this.props.height
        } : null}
      >
        <img
          src={this.props.src}
          className={this.state.isPending ? 'image-preload is-pending' : 'image-preload'}
        />
      </div>
    );
  }
}
