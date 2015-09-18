import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';

export default class WritingView extends Component {
  render() {
    const articles = [
      {
        id: 1,
        title: 'Sails.js and Heroku',
        time: 'March 4, 2015',
        url: 'http://pburtchaell.com/2015/sails/'
      },
      {
        id: 2,
        title: 'Goodbye Twitter Mobile',
        time: 'February 2, 2014',
        url: 'http://pburtchaell.com/2014/goodbye-twitter-mobile/'
      },
      {
        id: 3,
        title: 'Using Sourcemaps',
        time: 'March 26, 2014',
        url: 'http://pburtchaell.com/2014/using-source-maps/'
      }
    ];

    return (
      <View {...this.props.route.config}>
        <Section name="writing">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Writing</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              {articles.map(article => {
                return (
                  <article
                    key={article.id}
                    className="writing-feed-item"
                  >
                    <a href={article.url}>
                      <h1>{article.title}</h1>
                      <time>{article.time}</time>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
