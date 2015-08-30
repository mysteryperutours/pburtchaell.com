import Request from './request';
const request =  new Request('article');

export function createArticle(data) {
  return request.post({
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

export function getArticle() {
  return request.get();
}

export function getArticleCollection() {
  return request.getAll();
}
