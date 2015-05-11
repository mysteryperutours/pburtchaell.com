import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
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

}
