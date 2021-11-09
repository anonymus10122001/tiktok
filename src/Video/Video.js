import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";
import Grid  from '@material-ui/core/Grid';
function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div >
      <Grid container> 
        <Grid item xs={8}>
          <VideoFooter channel={channel} description={description} song={song} />
          <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
          ></video>
        </Grid>
        <Grid item xs={4}><VideoSidebar likes={likes} messages={messages} shares={shares} /></Grid>
      </Grid>
    
      
    </div>
  );
}

export default Video;
