import { site, videos } from '../data';

export default  `<?xml version="1.0" encoding="UTF-8"?>
  <rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>
    <channel>
      <title>${escape(site.name)}</title>
      <description>${escape(site.description)}</description>
      <link>${site.url + site.baseurl}/</link>
      <atom:link href='${site.url + site.baseurl}/feed.xml' rel='self' type='application/rss+xml' />
      <pubDate>${(new Date).toUTCString()}</pubDate>
      <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>${
        videos.values.map(video => `
          <item>
            <title>${escape(video.title)}</title>
            <description>${escape(stripHTML(video.__content))}</description>
            <pubDate>${new Date(video.date).toUTCString()}</pubDate>
            <link>${site.url + site.baseurl + video.path}</link>
            <guid isPermaLink='true'>${site.url + site.baseurl + video.path}</guid>
            <category>${escape(video.category)}</category>
          </item>
        `).join('\n')
    }</channel>
  </rss>
`

function stripHTML(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}

function escape(str) {
  return str.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}
