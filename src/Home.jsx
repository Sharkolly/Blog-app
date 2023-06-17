import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Home = ({posts, search, setSearch, setFilteredPosts ,filteredPosts}) => {


  // const handlePost = (id) => {
  //   const removePost = posts.filter((post) => post.id === id);
  //   setFilteredPosts(removePost);
  //   console.log(removePost);
  // }

  const { id } = useParams();
  // console.log(posts);

  const postsDisplay = search.map((post) => (
    <div className='post' key={post.id}>
      <Link to = {`/post/${post.id}`} className='postpage'>
        <h1>{post.title}</h1>
      </Link>
      <small>{post.dateTime}am</small>
      <p>{post.body.length > 80 ? (post.body).slice(0 , 81) + '...' : post.body}</p>
    </div>
  ))
  return (
    <div className='Home'>
      {postsDisplay}
    </div>
  )
}

export default Home