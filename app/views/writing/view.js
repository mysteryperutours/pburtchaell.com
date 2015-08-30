import React, { Component, PropTypes } from 'react';
import { View, Section } from 'components/layout';

export default class WritingView extends Component {
  render() {
    const articles = [
      {
        title: 'Sails.js and Heroku',
        time: 'March 4, 2015',
        url: 'http://pburtchaell.com/2015/sails/'
      },
      {
        title: 'Goodbye Twitter Mobile',
        time: 'February 2, 2014',
        url: 'http://pburtchaell.com/2014/goodbye-twitter-mobile/'
      },
      {
        title: 'Using Sourcemaps',
        time: 'March 26, 2014',
        url: 'http://pburtchaell.com/2014/using-source-maps/'
      }

    ];
    return (
      <View isFooterDark={true}>
        <Section name="writing">
          {articles.map(article => {
            return (
              <article>
                <a href={article.url}>
                  <h1>{article.title}</h1>
                  <time>{article.time}</time>
                </a>
              </article>
            );
          })}
        </Section>
      </View>
    );
  }
}
