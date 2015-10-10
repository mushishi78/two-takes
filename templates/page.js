import HomeButton from './home-button';

export default page => `
  <main>
    ${HomeButton}
    <article class='article'>
      <h2>${page.title}</h2>
      <div class='article-body'>${page.__content}</div>
    </article>
  </main>
`
