import React from 'react';
import classes from 'react-classes';

import Header from 'works/components/item/header';
import Footer from 'works/components/item/footer';
import Content from 'works/components/item/content';

class Containter extends React.Component {

  render() {
    return (
      <section>
        <Header/>
        <Content/>
        <Footer/>
      </section>
    );
  }

}

export default Container;
