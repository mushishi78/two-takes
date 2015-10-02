import React from 'react';
import { videos } from '../data';
import HomeButton from './home-button.jsx';
import VideoListItem from './video-list-item.jsx';

export default () =>
  <main>
    <HomeButton />
    <article>{
      collectProperty(videos.values, 'category').sort().map(category =>
        <section>
          <h1>{category}</h1>{
            videos.values.filter(video => video.category === category).map(video => <VideoListItem video={video} />)
        }</section>
      )
    }</article>
  </main>

function collectProperty(ary, k) {
  return ary.reduce((res, elem) => res.indexOf(elem[k]) < 0 ? res.concat(elem[k]) : res, []);
}
