import './css';
import Layout from './templates/layout';
import Feed from './templates/feed';

export default function(path, props, callback) {
  callback(path === '/feed' ? Feed : '<!doctype html>' + Layout(path));
}
