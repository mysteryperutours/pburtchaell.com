import { Component } from 'react';
import styles from './styles';

class Image extends Component {
  constructor(props) {
    super(props);

    this.handleLoad = this.handleLoad.bind(this);

    this.state = {
      isPending: true
    };
  }

  handleLoad() {
    return this.setState({
      isPending: !this.state.isPending
    });
  }

  componentDidMount() {
    let image = new window.Image();

    image.onload = this.handleLoad;
    image.src = this.props.src;
  }

  render() {
    return (
      <div
        className={this.state.isPending ? 'image-preload-wrapper is-pending' : 'image-preload-wrapper'}
        style={this.state.isPending ? Object.assign(this.props.style, {
          minWidth: this.props.width,
          minHeight: this.props.height
        }) : this.props.style}
      >
        <img
          src={this.props.src}
          className={this.state.isPending ? 'image-preload is-pending' : 'image-preload'}
        />
      </div>
    );
  }
}

Image.defaultProps = {
  style: {}
}

export default Image;
