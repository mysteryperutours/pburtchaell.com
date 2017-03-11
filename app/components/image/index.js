// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './styles.less';

type Props = {
  src: string,
  alt: string,
  height: string,
  width: string
};

const INITIAL_STATE = {
  isPending: true
};

/*
 * @class Image
 * @description The image component fetches an image and
 * handles showing the blurred image while the fullsize is pending.
 */
class Image extends PureComponent {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = INITIAL_STATE;
  }

  // Local state stores the state of the image request
  state: {
    isPending: boolean
  }

  componentDidMount() {
    const image = new window.Image();
    image.onload = this.handleLoad.bind(this);
    image.src = this.props.src;
  }

  handleLoad() {
    this.setState({
      isPending: false
    });
  }

  props: Props;

  render() {
    const { isPending } = this.state;

    /**
     * Preloaded images have a unique class name because I don't want
     * the transition effect to apply to all images.
     */
    const containerClassName: string = 'image-preload-container';
    const imageClassName: string = 'image-preload';

    return (
      <div
        className={classNames(containerClassName, {
          'is-pending': isPending
        })}
        style={{
          height: this.props.height,
          width: this.props.width
        }}
      >
        {isPending ? null : (
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={imageClassName}
            style={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        )}
      </div>
    );
  }
}

export default Image;
