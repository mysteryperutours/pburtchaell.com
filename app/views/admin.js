import React from 'react';
import View from 'components/view';
import Section from 'components/section';
import connectToStores from 'flummox/connect';
import flux from 'flux';

export default connectToStores(class AdminView extends React.Component {
  constructor(props) {
    super(props);
  }

  static willTransitionTo(transition) {
    //if () {
      debugger;
      console.log(flux);
      console.log(flux.getActions('session'))
      // import flux and use it directly to check if logged in
      //transition.redirect('/admin');
    //}
  }

  render() {
    return (
      <View>
        <Section>
          <h1>Admin</h1>
        </Section>
      </View>
    );
  }
}, ['session']);
