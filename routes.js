import { pages, posts, videos } from './data';

export default [
  '/',
  '/posts',
  '/videos',
  ...Object.keys(pages),
  ...Object.keys(posts),
  ...Object.keys(videos)
];
