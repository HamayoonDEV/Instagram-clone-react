import React from 'react'
import "./post.css"
import { Avatar } from '@mui/material'


function Post() {
  return (
    
    <div className='post'>
        <div className='post__header'>
        <Avatar
        className='post__avatar'
        alt='Hamayoon khosa'
        src='/images/hamayoon.jpg'
        />
    <h3>Hamayoon</h3>
    </div>
    {/*Header --> avatar --> user name */}
    <img className='post__image' src='https://reactjs.org/logo-og.png'/>
    {/*image post */}
    <h4 className='post__text'><strong> Hamayoon:</strong>This is my first pic</h4>
    {/*Footer comments */}
    </div>
    
  )
}

export default Post