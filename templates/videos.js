import { collectProperty } from '../utils';
import { videos } from '../data';
import HomeButton from './home-button';
import VideoListItem from './video-list-item';

const Category = category => `
  <section>
    <h1>${category}</h1>
    ${videos.filter(video => video.category === category).map(VideoListItem)}
  </section>
`

export default `
  <main>
    ${HomeButton}
    <article>
      ${collectProperty(videos, 'category').sort().map(Category).join('')}
    </article>
  </main>
`
