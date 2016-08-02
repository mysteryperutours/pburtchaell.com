import React, { Component } from 'react';
import { Link } from 'react-router';
import View from 'app-core/view';
import Section from 'app-core/section';

class HomeView extends Component {
  render() {
    var grey = 'rgb(200, 200, 210)';

    return (
      <View {...this.props.route.config}>
        <Section style={{ marginTop: '0', paddingBottom: '0' }}>
          <div className="row row-large">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Patrick<br/>
                Burtchaell
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>I'm a product designer, visual designer and web developer. I've worked both freelance in New Orleans since 2014 and at Facebook in Menlo Park.</p>
              <hr />
              <p className="home-subtitle">
                <small>Outside work, I attend Loyola University New Orleans as a design student. I'll graduate in 2018.</small>
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="row row-large row-no-gutter">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">
                Featured<br/>
                Work
              </h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <p>I frequently write <a href="https://medium.com/@pb">on Medium</a> about design and technology.</p>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}

export default HomeView;
