import { style } from '../utils';
import HomeButton from './home-button';

const styles = style({ article: 'margin: 0 10%', body: 'color: #fff' });

export default page => `
  <main>
    ${HomeButton}
    <article ${styles.article}>
      <h2>${page.title}</h2>
      <div ${styles.body}>${page.__content}</div>
    </article>
  </main>
`
