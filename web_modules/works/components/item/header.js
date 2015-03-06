import React from 'react';

class Header extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Flux>
        <header className="portfolio-item-header">
          <h1 className="portfolio-item-title">{this.props.title}</h1>
          <h2 className="portfolio-item-subtitle">{this.props.description}</h2>
        </header>
      </Flux>
    );
  }

});

export default Header;
