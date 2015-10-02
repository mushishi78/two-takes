import React from 'react';
import { pages, posts, videos } from '../data';
import Home from './home.jsx';
import Layout from './layout.jsx';
import Page from './page.jsx';
import Post from './post.jsx';
import Posts from './posts.jsx';
import Video from './video.jsx';
import Videos from './videos.jsx';

export default ({ path }) =>
  <Layout path={path}>{
    path === '/' ? <Home /> :
    path === '/posts' ? <Posts /> :
    path === '/videos' ? <Videos /> :
    pages[path]  ? <Page page={pages[path]} /> :
    posts[path]  ? <Post post={posts[path]} /> :
    videos[path] ? <Video video={videos[path]} /> :
                   <Page page={pages['/404']} />
  }</Layout>
