import React from 'react';
import HomeButton from './home-button.jsx';

export default ({ video }) =>
  <main itemScope itemType='http://schema.org/VideoObject'>
    <HomeButton />
    <header>
  	  <h2 style={styles.h2} itemProp='name'>{video.title}</h2>
  	  <time itemProp='uploadDate' content={video.date}>
  	    {new Date(video.date).toDateString()}
  	  </time>
  	</header>
  	<section style={styles.videoWrapper}>
  		<iframe src={'//www.youtube.com/embed/' + video.youtube_id}
  		        itemProp='embedUrl'
  		        frameBorder='0'
              style={styles.iframe}
  		        allowFullScreen />
  	</section>
    <section itemProp='description'
             style={styles.description}
             dangerouslySetInnerHTML={{ __html: video.__content }} />
  </main>

const styles = {
  h2: {
    margin: '0'
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: '0',
    overflow: 'hidden',
    maxWidth: '100%',
    margin: '25px 0'
  },
  iframe: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  description: {
    margin: '25px 2%',
    color: '#FFF'
  }
};
