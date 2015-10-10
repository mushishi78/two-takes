import { pages, posts, site, videos } from './data';

export const prettyDate = date => new Date(date).toDateString();
export const stripHTML = str => str.replace(/<(?:.|\n)*?>/gm, '');

export function escapeXML(str) {
  return str.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

export function collectProperty(ary, prop) {
  return ary.reduce((res, elem) =>
    res.indexOf(elem[prop]) < 0 ? res.concat(elem[prop]) : res
  , []);
}
