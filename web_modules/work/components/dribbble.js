/** @jsx React.DOM */

import React from 'react';
import classes from 'react-classes';
import xhr from 'xhr';

let Dribbble = React.createClass({

  mixins: [classes],

  getShots(event) {

    if (event) {
      event.preventDefault();
    }

    var CLIENT_TOKEN = this.state.CLIENT_TOKEN;
    var ROOT = 'https://api.dribbble.com/v1';

    var ref = `${ROOT}/users/-p/shots?access_token=${CLIENT_TOKEN}`;

    xhr({
      url: ref
    },
    function (error, resp, body) {
      if (!error) {

        body.slice(0,2); // body.length does not work because array is not writable

        this.setState({
          shots: JSON.parse(body),
          loading: false
        });

        return;

      } else {

        this.setState({
          loading: false,
          error: true
        });

      }
    }.bind(this));

  },

  getInitialState() {
    return {
      shots: [],
      loading: true,
      CLIENT_TOKEN: 'd90d6c73454bc730c99932519476213b971c6a84699b478c35aa8877797e6231'
    };
  },

  render() {
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="black">
            <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
            <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
              <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      );
    } else if (!this.state.loading) {
      return (
        <div className="row row-full-width">
          <div className="col col-l-12 col-s-12">
            <h4>Recent Shots</h4>
            <small><h5><b>from Dribbble</b></h5></small>
          </div>
          {this.state.shots.map(function (shot) {

            let styles = {
              backgroundImage: `url(${shot.images.hidpi})`
            };

            return (
              <div className="image-card-wrapper col col-l-4 col-s-12">
                <a href={shot.html_url} target="_blank" rel="external">
                  <div className="image-card" >
                    <div className="image-card-title">{shot.title}</div>
                    <div className="image-card-background"style={styles}></div>
                  </div>
                </a>
              </div>
            );

          })}
        </div>
      );
    }
  }

});

export default Dribbble;
