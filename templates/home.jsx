import React from 'react';
import { site } from '../data';
import VideoList from './video-list.jsx';

export default ({ videos }) =>
  <main>
    <header style={styles.header}>
      <img src={site.baseurl + '/img/logo.png'} style={styles.logo} />
      <nav style={styles.links}>
        <a style={styles.a} href={site.baseurl + '/videos'}>Videos</a>
        <a style={styles.a} href={site.baseurl + '/posts'}>Words</a>
        <a style={styles.a} href={site.baseurl + '/about'}>About</a>
      </nav>
    </header>
    <VideoList videos={videos.slice(0, 3)} />

    <nav style={styles.icons}>
      <a href={site.facebook} target='_blank'>
        <img src={site.baseurl + '/img/fb.png'} style={styles.icon} />
      </a>
      <a href={site.twitter} target='_blank'>
        <img src={site.baseurl + '/img/twitter.png'} style={styles.icon} />
      </a>
      <a href={site.youtube} target='_blank'>
        <img src={site.baseurl + '/img/youtube.png'} style={styles.icon} />
      </a>
      <a href={site.baseurl + '/feed.xml'} target='_blank'>
        <img src={site.baseurl + '/img/rss.png'} style={styles.icon} />
      </a>
    </nav>
  </main>

const styles = {
  header: {
    margin: '10px 0',
    fontSize: '1.2em'
  },
  logo: {
    background: 'radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%)',
    padding: '10px'
  },
  links: {
    marginTop: '-10px'
  },
  a: {
    padding: '0 1%',
    color: '#fff'
  },
  icons: {
    textAlign: 'right'
  },
  icon: {
    margin: '5px 0.5% 0',
    width: '30px'
  }
}
