import React from 'react';
import HomeButton from './home-button.jsx';

export default ({ post }) =>
  <main itemScope itemType='http://schema.org/BlogPosting'>
    <HomeButton />
    <article style={styles.article}>
      <h1 itemProp='headline'>{post.title}</h1>
      <time itemProp='datePublished' content={post.date}>
        {new Date(post.date).toDateString()}
      </time>
      <div>By: <span itemProp='author'>{post.author}</span></div>
      <div itemProp='articleBody'
           style={styles.body}
           dangerouslySetInnerHTML={{ __html: post.__content }} />
    </article>
  </main>

const styles = {
  article: {
    margin: '0 10%'
  },
  body: {
    color: '#fff'
  }
}
