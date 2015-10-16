import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'components/layout/view';
import Section from 'components/layout/section';
import './styles';

export default class StyleGuideView extends Component {
  render() {
    return (
      <View>
        <Section>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Code Style <br/>
                Guide v2
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>This document aims to explain how to write maintainable front-end code. Maintainability is the ease with which a product can be updated and changed in order to isolate bugs and their cause, replace components individually, and maximize the useful life of the product.</p>
            </div>
          </div>
        </Section>
        <Section noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                HTML
              </h1>
            </div>
            <div
              className="col col-l-10 col-s-12"
              dangerouslySetInnerHTML={{
                __html: require('./html.md')
              }}
            ></div>
          </div>
        </Section>
        <Section>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                CSS
              </h1>
            </div>
            <div
              className="col col-l-10 col-s-12"
              dangerouslySetInnerHTML={{
                __html: require('./css.md')
              }}
            ></div>
          </div>
        </Section>
        <Section noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Appendix
              </h1>
            </div>
            <div
              className="col col-l-10 col-s-12"
              dangerouslySetInnerHTML={{
                __html: require('./appendix.md')
              }}
            ></div>
          </div>
        </Section>
      </View>
    );
  }
}
