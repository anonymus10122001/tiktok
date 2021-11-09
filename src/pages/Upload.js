import React, { useState } from 'react'
import axios from 'axios'
import faker from "faker"

const Upload = () => {
  const username = 'vanhuy10122001'
  const name = 'Văn Huy'
  const avatar = 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/84521965_1586322048183451_2294998362820182016_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KW3NRGtJY1cAX-FSDhm&tn=k1ECe9miwGmDhCCc&_nc_ht=scontent.fdad3-4.fna&oh=c737c59fad25f483aa83eba5b240d757&oe=61AFE447'
  const [video, setVideo] = useState(null)
  const [caption, setCaption] = useState(null)
  const today = new Date()
  const timestamp = today.toISOString()

  let id = faker.random.uuid()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data =  {
        id: id,
        name: name,
        username: username,
        avatar: avatar,
        is_followed: false,
        video: video,
        caption: caption,
        likes: 0,
        comments: 0,
        timestamp: timestamp,
        button_visible: false  
      }

      axios.post('/.netlify/functions/add', data)
      .then((response) => {
      console.log(response)
      })
    .catch((err) => {
      console.error(err)
  })
  }

  return (
    <div className="upload-page">
        <br />
        <h1>Upload video</h1>
        {/* <p>This video will be published to @{username}</p> */}
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='section'>
              <div className="image-upload"></div>
              <div className="form-section">
                <div className='section input-section'>
                  <label className="bold">Caption</label>
                  <input
                    className='input'
                    name='caption'
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>
                <div className="break"></div>
                <div className='section input-section'>
                  <label className="bold">Video Url</label>
                  <input
                    className='input'
                    name='video'
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </div>
              </div>
            </div>			
            <button>Post</button>
          </form>
        </div>
    </div>
  )
}

export default Upload