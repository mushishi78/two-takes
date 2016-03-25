import { style, prettyDate } from '../utils';
import HomeButton from './home-button';

const styles = style({
  article: `
    background: rgba(255, 255, 255, 0.35);
    padding: 15px 10%;
    border-radius: 10px;
  `,
  body: 'color: #fff'
});

export default post => `
  <main itemscope itemtype='http://schema.org/BlogPosting'>
    ${HomeButton}
    <article ${styles.article}>
      <h1 itemprop='headline'>${post.title}</h1>
      <time itemprop='datePublished' content=${post.date}>
        ${prettyDate(post.date)}
      </time>
      <div>By: <span itemprop='author'>${post.author}</span></div>
      <div itemprop='articleBody' ${styles.body}>${post.__content}</div>
    </article>
  </main>
`
