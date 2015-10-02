import { style, prettyDate } from '../utils';
import { site } from '../data';

const styles = style({
  a: `
    display: inline-block;
    text-align: left;
    margin: 15px 1%
  `,
  img: `
    width: 350px;
    max-width: 90%;
    border-radius: 10px;
    border: 5px solid #F7911D;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.45);
  `,
  time: 'padding-bottom: 10px'
});

export default video => `
  <a href='${site.baseurl + video.path}' ${styles.a}>
    <h3>${video.title}</h3>
    <time ${styles.time}>${prettyDate(video)}</time>
    <img src='//img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg'
         ${styles.img} />
  </a>
`
