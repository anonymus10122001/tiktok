import React, {useState, useEffect} from "react";
import FollowersColumn from '../components/FollowersColumn'

import Header from '../components/Header'
import Video from '../Video/Video'
import db from "../Video/firebase";

import '../App.css'
//npm install --save antd @ant-design/icons date-fns firebase lodash react-router-dom styled-components
import Grid  from '@material-ui/core/Grid';

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
    <div>
      <Header />
      <div>
        <Grid container>
          <Grid item xs={4}><FollowersColumn /></Grid>
          <Grid item xs={8}>
            <div className="app">
              <div className="app__videos">
                {videos.map(
                  ({ url, channel, description, song, likes, messages, shares }) => (
                    <Video
                      url={url}
                      channel={channel}
                      song={song}
                      likes={likes}
                      messages={messages}
                      description={description}
                      shares={shares}
                    />
                  )
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home