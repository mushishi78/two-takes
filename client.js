import './css';
import addressbar from 'addressbar';
import App from './templates/app';
import { title } from './utils';
import { site } from './data';

const appElement = document.getElementById('app');

addressbar.on('change', event => {
  event.preventDefault();
  const path = normalize(event.target.value);
  addressbar.value = site.baseurl + path;
  appElement.innerHTML = App(path);
  document.title = title(path);
  window.scrollTo(0, 0);
});

function normalize(path) {
  path = path.replace(location.origin, '');
  path = path.replace('index.html', '');
  path = path.replace(site.baseurl, '');
  path = decodeURIComponent(path);
  path = path.replace(/\/$/, '') || '/';
  return path;
}
