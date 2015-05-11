import React from 'react';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="portfolio-item-content">
        {this.props.children}
      </article>
    );
  }

}

export default Content;