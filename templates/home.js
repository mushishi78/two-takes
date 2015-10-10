import { site, videos } from '../data';
import VideoListItem from './video-list-item';

export default `
  <main>
    <header class='home-header'>
      <amp-img src='${site.baseurl}/img/logo.png' width='245' height='245'></amp-img>
      <nav>
        <a href='${site.baseurl}/videos'>Videos</a>
        <a href='${site.baseurl}/posts'>Articles</a>
        <a href='${site.baseurl}/about'>About</a>
      </nav>
    </header>

    <article class='home-article'>
      ${videos.slice(0, 3).map(VideoListItem).join('')}
    </article>

    <nav class='home-icons'>
      <a href='${site.facebook}' target='_blank'>
        <amp-img src='${site.baseurl}/img/fb.png' width='30' height='30' />
      </a>
      <a href='${site.twitter}' target='_blank'>
        <amp-img src='${site.baseurl}/img/twitter.png' width='30' height='30' />
      </a>
      <a href='${site.youtube}' target='_blank'>
        <amp-img src='${site.baseurl}/img/youtube.png' width='30' height='30' />
      </a>
      <a href='${site.baseurl}/feed.xml' target='_blank'>
        <amp-img src='${site.baseurl}/img/rss.png' width='30' height='30' />
      </a>
    </nav>
  </main>
`
