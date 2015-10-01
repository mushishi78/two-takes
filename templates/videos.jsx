import React from 'react';
import HomeButton from './home-button.jsx';
import VideoList from './video-list.jsx';

export default ({ videos }) =>
  <main>
    <HomeButton />
    <VideoList videos={videos} />
  </main>
