import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';

export default class AdminDashboardView extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    return (
      <View>
        <Section>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Hello, Patrick</h1>
            </div>
            <div className="col col-l-10 col-s-12">

            </div>
          </div>
        </Section>
      </View>
    );
  }
}
