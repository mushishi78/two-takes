import { prettyDate } from '../utils';
import HomeButton from './home-button';

export default video => `
  <main itemscope itemtype='http://schema.org/VideoObject'>
    ${HomeButton}
    <header>
  	  <h2 class='video-title' itemprop='name'>${video.title}</h2>
      <meta itemprop='uploadDate' content=${video.date}>
  	  <time>${prettyDate(video.date)}</time>
  	</header>
		<amp-youtube video-id='${video.youtube_id}' width='240' height='135' layout='responsive'>
    </amp-youtube>
    <section itemprop='description' class='video-description'>
      ${video.__content}
    </section>
  </main>
`
