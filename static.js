import './css';
import routes from './routes';
import Layout from './templates/layout';
import Feed from './templates/feed';

function toFilename(path) {
  if(path.indexOf('.') < 0) { path += '/index.html'; }
  return path.replace(/^(\\|\/)+/, '');
}

export default function(render, done) {
  render('feed.xml', Feed);
  routes.forEach(route => render(toFilename(route), '<!doctype html>' + Layout(route)));
  done();
}
