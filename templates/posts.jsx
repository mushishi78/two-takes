import React from 'react';
import { site } from '../data';
import HomeButton from './home-button.jsx';

export default ({ posts }) =>
  <main><HomeButton />{
    posts.map(post =>
      <a href={site.baseurl + post.path}
         className='post-link'
         style={styles.a}
         key={post.path}>
        <h3>{post.title}</h3>
        <time style={styles.time}>
          {new Date(post.date).toDateString()}
        </time>
        <p style={styles.p} dangerouslySetInnerHTML={{ __html: summary(post) }} />
      </a>
    )
  }</main>

function summary({  __content }) {
  return __content.replace(/<(?:.|\n)*?>/gm, '').substring(0, 300) + '...';
}

const styles = {
  a: {
    display: 'block',
    padding: '15px 2%',
    margin: '15px 1%',
    color: '#000',
    borderRadius: '6px',
    boxShadow: '0 0 3px 2px rgba(0, 0, 0, 0.5)',
    background: '#F8921F'
  },
  time: { color: '#fff' },
  p: { margin: '0' }
}
