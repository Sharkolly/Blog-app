import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({posts, setPosts, postBody, setPostBody}) => {
  return (
    <div className='nav'>
      <form action="">
        <input type='search' className='search' onChange={(e) => setPostBody(e.target.value)} placeholder='Search'/>
      </form>
      <nav>
        <ul>
          <li><Link to = '/' className='links'>Home</Link></li>
          <li><Link to = '/postpage' className='links'>Post</Link></li>
          {/* <li><Link to = '/about' className='links'>About</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav