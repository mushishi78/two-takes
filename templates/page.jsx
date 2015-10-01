import React from 'react';
import HomeButton from './home-button.jsx';

export default ({ page }) =>
  <main>
    <HomeButton />
    <article style={styles.article}>
      <h2>{page.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.__content }}
           style={styles.body} />
    </article>
  </main>

const styles = {
  article: { margin: '0 10%' },
  body: { color: '#fff' }
}
