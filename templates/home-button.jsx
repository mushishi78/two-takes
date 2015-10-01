import React from 'react';
import { site } from '../data';

export default () =>
  <a href={site.baseurl + '/'}>
    <img src={site.baseurl + '/img/logo.png'}
         style={styles.img} />
  </a>

const styles = {
  img: {
    marginTop: '10px',
    width: '100px',
    background: 'radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%)',
    padding: '5px'
  },
}
