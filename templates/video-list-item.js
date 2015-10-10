import { prettyDate } from '../utils';
import { site } from '../data';

const img = (id, media, width, height) => `
  <amp-img src='//img.youtube.com/vi/${id}/hqdefault.jpg'
           media='(${media})'
           width='${width}'
           height='${height}'></amp-img>
`

export default video => `
  <a href='${site.baseurl + video.path}' class='video-list-item'>
    <h3>${video.title}</h3>
    <time>${prettyDate(video.date)}</time>
    ${img(video.youtube_id, 'max-width: 400px', '250', '187')}
    ${img(video.youtube_id, 'min-width: 401px', '324', '243')}
  </a>
`
