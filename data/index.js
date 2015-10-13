import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');

function reduceFn(obj, file) {
  file = { path: toPath(file), ...require(file) };
  const values = obj.values.concat(file);
  return { ...obj, [file.path]: file, values };
};

const pages  = require.context('.', true, /\/pages\// ).keys().reduce(reduceFn, { values: [] });
const posts  = require.context('.', true, /\/posts\// ).keys().reduce(reduceFn, { values: [] });
const videos = require.context('.', true, /\/videos\//).keys().reduce(reduceFn, { values: [] });

posts.values.reverse();
videos.values.reverse();

export default { pages, posts, site, videos };
