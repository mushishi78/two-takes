import { prettyDate } from '../utils';
import HomeButton from './home-button';

export default post => `
  <main itemscope itemtype='http://schema.org/BlogPosting'>
    ${HomeButton}
    <article class='article'>
      <h1 itemprop='headline'>${post.title}</h1>
      <time itemprop='datePublished' content=${post.date}>
        ${prettyDate(post.date)}
      </time>
      <div>By: <span itemprop='author'>${post.author}</span></div>
      <div itemprop='articleBody' class='article-body'>${post.__content}</div>
    </article>
  </main>
`
