import { stripHTML, prettyDate } from '../utils';
import { site, posts } from '../data';
import HomeButton from './home-button';

const summary = post => stripHTML(post.__content).substring(0, 300) + '...';

const PostListItem = post => `
  <a href='${site.baseurl + post.path}' class='post-list-item'>
    <h3>${post.title}</h3>
    <time>${prettyDate(post.date)}</time>
    <p>${summary(post)}</p>
  </a>
`

export default `<main>${HomeButton}${posts.map(PostListItem).join('')}</main>`
