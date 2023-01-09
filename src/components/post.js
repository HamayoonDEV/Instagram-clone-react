import React from 'react'
import "./post.css"
import { Avatar } from '@mui/material'


function Post({username,caption,imageurl}) {
  return (
    
    <div className='post'>
        <div className='post__header'>
        <Avatar
        className='post__avatar'
        alt='Hamayoon khosa'
        src='/images/hamayoon.jpg'
        />
    <h3>{username}</h3>
    </div>
    {/*Header --> avatar --> user name */}
    <img className='post__image' src={imageurl}/>
    {/*image post */}
    <h4 className='post__text'><strong> {username}:</strong>{caption}</h4>
    {/*Footer comments */}
    </div>
    
  )
}

export default Post