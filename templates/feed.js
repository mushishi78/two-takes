import { site, videos } from '../data';
import { escapeXML, stripHTML } from '../utils';

export default `<?xml version="1.0" encoding="UTF-8"?>
  <rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>
    <channel>
      <title>${escapeXML(site.name)}</title>
      <description>${escapeXML(site.description)}</description>
      <link>${site.url + site.baseurl}/</link>
      <atom:link href='${site.url + site.baseurl}/feed.xml' rel='self' type='application/rss+xml' />
      <pubDate>${(new Date).toUTCString()}</pubDate>
      <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>${
        videos.map(video => `
          <item>
            <title>${escapeXML(video.title)}</title>
            <description>${escapeXML(stripHTML(video.__content))}</description>
            <pubDate>${new Date(video.date).toUTCString()}</pubDate>
            <link>${site.url + site.baseurl + video.path}</link>
            <guid isPermaLink='true'>${site.url + site.baseurl + video.path}</guid>
            <category>${escapeXML(video.category)}</category>
          </item>
        `).join('\n')
    }</channel>
  </rss>
`
