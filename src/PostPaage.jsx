import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const PostPaage = ({addPost, posts}) => {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const submitBtn = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const savePost = {id, title, body: post, dateTime: "Feb 02 2023 00:00:01"};
    addPost(savePost);


  }
  return (
    <div className='postPage'>
      <form onSubmit={submitBtn} >
        <label htmlFor="Title">Title: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} className='input' placeholder='Title...' name="" id="Title" />
        <label htmlFor="post">Posts: </label>
        <textarea onChange={(e) => setPost(e.target.value)} className='input' name="" id="Title" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PostPaage