import React, { Component } from 'react';
import RouteContainer from '../../components/routeContainer';
import Column from '../../components/column';
import Row from '../../components/row';
import Text, { types } from '../../components/text';
import requestHandler from '../../support/requestHandler';

export default class NotFoundRoute extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: null,
      isPending: true
    };
  }

  componentWillMount() {
    const url = "api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=oh-no";
    requestHandler.call(this, url);
  }

  render() {
    return (
      <RouteContainer>
        <Row>
          <Column largeSize="8" smallSize="12">
              <figure className="figure">
                <div
                  className="image image-large"
                  style={Object.assign({
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(45deg, #E6E6E6, #E6E6E6, #D6D3D3, #E6E6E6,#E6E6E6)',
                    backgroundSize: '1000% 1000%',
                    animationName: 'scroll-background-gradient',
                    animationDuration: '1.5s',
                    animationTimingFunction: 'cubic-bezier(0.42, 0, 0.26, 0.99)',
                    animationIterationCount: 'infinite',
                    animationDirection: 'normal',
                    animationFillMode: 'forwards'
                  }, this.state.isPending ? {} : {
                    display: 'block',
                    marginBottom: '1rem',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'none',
                    backgroundImage: `url(${this.state.data.fixed_width_downsampled_url})`
                  })}
                />
                {this.state.isPending ? null : (
                  <figcaption>Powered by the <a href="https://github.com/Giphy/GiphyAPI">Giphy API</a>.</figcaption>
                )}
              </figure>
            <Text type={types.HEADER_1}>Not Found</Text>
            <Text>I'm sorry, this page does not exist.</Text>
            <hr />
            <Text linkTo="/"><small>&#8592; Go to My Work</small></Text>
          </Column>
        </Row>
      </RouteContainer>
    );
  }
}
