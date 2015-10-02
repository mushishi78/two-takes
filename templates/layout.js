import { site } from '../data';
import { title } from '../utils';
import App from './app';

export default path => `
  <html>
    <head>
      <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content=${site.description} />
      <link rel='canonical' href=${site.url + site.baseurl + path} />
      <title>${title(path)}</title>
      <link href='${site.baseurl}/styles.css' rel='stylesheet' type='text/css'>
      <link href='//fonts.googleapis.com/css?family=Poppins' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <div id='app'>${App(path)}</div>
      <script src='${site.baseurl}/client.js'></script>
    </body>
  </html>
`
