import React from 'react';
import { pages, posts, videos } from '../data';
import Home from './home.jsx';
import Layout from './layout.jsx';
import Page from './page.jsx';
import Post from './post.jsx';
import Posts from './posts.jsx';
import Video from './video.jsx';
import Videos from './videos.jsx';

const values = array => Object.keys(array).map(key => array[key]);
const videosValues = values(videos).reverse();
const postsValues = values(posts).reverse();

export default ({ path }) =>
  <Layout path={path}>{
    path === '/' ? <Home videos={videosValues} /> :
    path === '/posts' ? <Posts posts={postsValues} /> :
    path === '/videos' ? <Videos videos={videosValues} /> :
    pages[path]  ? <Page page={pages[path]} /> :
    posts[path]  ? <Post post={posts[path]} /> :
    videos[path] ? <Video video={videos[path]} /> :
                   <Page page={pages['/404']} />
  }</Layout>
