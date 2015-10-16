const Article = require('../server')('article');

export function createArticle(data) {
  return Article.post({
    publishDay: data.publishDay,
    publishYear: data.publishYear,
    publishMonth: data.publishMonth,
    description: data.description,
    keywords: data.keywords,
    title: data.title,
    permalink: data.permalink,
    markdown: data.body
  });
}

export function getArticle(id) {
  return Article.get(id);
}

export function getArticleCollection() {
  return Article.get();
}
