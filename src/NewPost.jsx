import React from 'react'
import { useParams } from 'react-router-dom'

const NewPost = ({ posts, setSearch,deleteBtn, search}) => {
  const { id } = useParams();
 

  const post = search.find((postss) => postss.id.toString() === id);
  console.log(post);
  const displayPost = search.map((searchItems) => (
    <div className='new' key={searchItems.id}>
      <h1 className='title'>{searchItems.title}</h1>
      <small>{searchItems.dateTime}</small>
      <p>{searchItems.body}</p>
    </div>
  ));

  console.log(search);
  // console.log(posts);
  // console.log(filteredPosts);

  return (
    <div>

      {/* {displayPost} */}

     {post &&  <div className='new' key={post.id}>
      <h1 className='title'>{post.title}</h1>
      <small>{post.dateTime}</small>
      <p>{post.body}</p>
      <button onClick={() => deleteBtn(post.id)}>Delete</button>
    </div>}

    {!post && <>
      <h1>No Post Found</h1>
    </>}
    </div> 
  )
}

export default NewPost