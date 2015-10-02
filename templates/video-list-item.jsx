import React from 'react';
import { site } from '../data';

export default ({ video }) =>
  <a href={site.baseurl + video.path} key={video.path} style={styles.a}>
    <h3>{video.title}</h3>
    <time style={styles.time}>
      {new Date(video.date).toDateString()}
    </time>
    <img src={'//img.youtube.com/vi/' + video.youtube_id + '/hqdefault.jpg'}
         style={styles.img}/>
  </a>

const styles = {
  a: {
    display: 'inline-block',
    textAlign: 'left',
    margin: '15px 1%'
  },
  img: {
    width: '350px',
    maxWidth: '90%',
    borderRadius: '10px',
    border: '5px solid #F7911D',
    boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.45)'
  },
  time: {
    paddingBottom: '10px'
  }
};
