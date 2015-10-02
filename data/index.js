import site from './site.yml';
site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/').replace(/\..*$/, '');
const reduceFn = (obj, file) => {
  file = { ...require(file), path: toPath(file) };
  const values = (obj.values || []).concat(file);
  return { ...obj, [file.path]: file, values };
};

const pages  = require.context('.', true, /\/pages\// ).keys().reduce(reduceFn, {});
const posts  = require.context('.', true, /\/posts\// ).keys().reduce(reduceFn, {});
const videos = require.context('.', true, /\/videos\//).keys().reduce(reduceFn, {});

posts.values.reverse();
videos.values.reverse();

export default { pages, posts, site, videos };
