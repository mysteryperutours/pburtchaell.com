import React from 'react';
import classes from 'react-classes';

import Header from 'works/components/item/header';
import Footer from 'works/components/item/footer';
import Content from 'works/components/item/content';

let Item = React.createClass({

  render() {
    return (
      <section>
        <Header/>
        <Content/>
        <Footer/>
      </section>
    );
  }

});

export default Item;
