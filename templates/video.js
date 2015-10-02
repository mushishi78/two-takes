import { style, prettyDate } from '../utils';
import HomeButton from './home-button';

const styles = style({
  h2: 'margin: 0',
  videoWrapper: `
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    margin: 25px 0
  `,
  iframe: `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  `,
  description: 'margin: 25px 2%; color: #FFF'
});

export default video => `
  <main itemscope itemtype='http://schema.org/VideoObject'>
    ${HomeButton}
    <header>
  	  <h2 ${styles.h2} itemprop='name'>${video.title}</h2>
  	  <time itemprop='uploadDate' content=${video.date}>
  	    ${prettyDate(video)}
  	  </time>
  	</header>
  	<section ${styles.videoWrapper}>
  		<iframe src='//www.youtube.com/embed/${video.youtube_id}'
  		        itemprop='embedUrl'
  		        frameborder='0'
              ${styles.iframe}
  		        allowfullscreen></iframe>
  	</section>
    <section itemprop='description' ${styles.description}>
      ${video.__content}
    </section>
  </main>
`
