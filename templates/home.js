import { site, videos } from '../data';
import { style } from '../utils';
import VideoListItem from './video-list-item';

const styles = style({
  header: 'margin: 10px 0; font-size: 1.2em',
  links: 'margin-top: -10px',
  a: 'padding: 0 1%; color: #fff',
  article: 'text-align: center',
  icons: 'text-align: right',
  icon: 'margin: 5px 0.5% 0; width: 30px',
  logo: `
    background: radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%);
    padding: 10px
  `
});

export default `
  <main>
    <header ${styles.header}>
      <img src='${site.baseurl}/img/logo.png' ${styles.logo} />
      <nav ${styles.links}>
        <a ${styles.a} href='${site.baseurl}/videos'>Videos</a>
        <a ${styles.a} href='${site.baseurl}/posts'>Articles</a>
        <a ${styles.a} href='${site.baseurl}/about'>About</a>
      </nav>
    </header>

    <article ${styles.article}>
      ${videos.values.slice(0, 3).map(VideoListItem).join('')}
    </article>

    <nav ${styles.icons}>
      <a href='${site.facebook}' target='_blank'>
        <img src='${site.baseurl}/img/fb.png' ${styles.icon} />
      </a>
      <a href='${site.twitter}' target='_blank'>
        <img src='${site.baseurl}/img/twitter.png' ${styles.icon} />
      </a>
      <a href='${site.youtube}' target='_blank'>
        <img src='${site.baseurl}/img/youtube.png' ${styles.icon} />
      </a>
      <a href='${site.baseurl}/feed.xml' target='_blank'>
        <img src='${site.baseurl}/img/rss.png' ${styles.icon} />
      </a>
    </nav>
  </main>
`
