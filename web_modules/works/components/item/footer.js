import React from 'react';

class Footer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <footer className="portfolio-item-footer">
        <div className="portfolio-item-detail">
          <div className="portfolio-item-detail-wrapper">
            <span className="item-detail-key"><b>Date:</b></span>
            <span className="item-detail-value">{this.props.date}</span>
          </div>
        </div>
        <div className="portfolio-item-detail">
          <div className="portfolio-item-detail-wrapper">
            <span className="item-detail-key"><b>Medium:</b></span>
            <span className="item-detail-value">{this.props.medium}</span>
          </div>
        </div>
        <div className="portfolio-item-detail">
          <div className="portfolio-item-detail-wrapper">
            <span className="item-detail-key"><b>Client:</b></span>
            <span className="item-detail-value">{this.props.client}</span>
          </div>
        </div>
      </footer>
    );
  }

};

export default Footer;