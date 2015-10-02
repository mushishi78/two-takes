import React from 'react';
import { pages, posts, videos } from '../data';
import Home from './home';
import Page from './page';
import Post from './post';
import Posts from './posts';
import Video from './video';
import Videos from './videos';

export default (path) =>
  path === '/' ? Home :
  path === '/posts' ? Posts :
  path === '/videos' ? Videos :
  pages[path]  ? Page(pages[path]) :
  posts[path]  ? Post(posts[path]) :
  videos[path] ? Video(videos[path]) :
                 Page(pages['/404'])
