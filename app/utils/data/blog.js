import Request from './request';
//import transformMarkdownToHTML from 'utils/transformMarkdownToHTML';

/*export function createArticle(data) {
  return Request.post('article', {
    publishDay: data.publishDay,
    publishYear: data.publishYear,
    publishMonth: data.publishMonth,
    description: data.description,
    keywords: data.keywords,
    title: data.title,
    permalink: data.permalink,
    markdown: data.body,
    html: transformMarkdownToHTML(data.body)
  });
}*/

export function getArticle() {
  return Request.get('article');
}

export function getArticleCollection() {
  return Request.get('article');
}
