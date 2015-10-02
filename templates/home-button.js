import { site } from '../data';
import { style } from '../utils';

const styles = style({
  img: `
    margin-top: 10px;
    width: 100px;
    padding: 5px;
    background: radial-gradient(rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 72%);
  `
});

export default `
  <a href='${site.baseurl}/'>
    <img src='${site.baseurl}/img/logo.png' ${styles.img} />
  </a>
`
