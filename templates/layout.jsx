import React from 'react';
import { pages, posts, site, videos } from '../data';

export default ({ children, path }) =>
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={site.description} />
      <link rel='canonical' href={site.url + site.baseurl + path} />
      <title>{site.name + title(path)}</title>
      <link href={site.baseurl + '/styles.css'} rel='stylesheet' type='text/css' />
      <link href='//fonts.googleapis.com/css?family=Poppins' rel='stylesheet' type='text/css' />
    </head>
    <body>
      {children}
      <script src={site.baseurl + '/client.js'} />
    </body>
  </html>

function title(path) {
  return  pages[path] ? ' | ' +  pages[path].title :
          posts[path] ? ' | ' +  posts[path].title :
         videos[path] ? ' | ' + videos[path].title : '';
}
