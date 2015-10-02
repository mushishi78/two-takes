import { style, stripHTML, prettyDate } from '../utils';
import { site, posts } from '../data';
import HomeButton from './home-button';

const styles = style({
  a: `
    display: block;
    padding: 15px 2%;
    margin: 15px 1%;
    color: #000;
    border-radius: 6px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.5);
    background: #F8921F
  `,
  time: 'color: #fff',
  p: 'margin: 0'
});

const summary = post => stripHTML(post.__content).substring(0, 300) + '...';

const PostListItem = post => `
  <a href='${site.baseurl + post.path}' class='post-link' ${styles.a}>
    <h3>${post.title}</h3>
    <time ${styles.time}>${prettyDate(post)}</time>
    <p ${styles.p}>${summary(post)}</p>
  </a>
`

export default `<main>${HomeButton}${posts.values.map(PostListItem).join('')}</main>`
