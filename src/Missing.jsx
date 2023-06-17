import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Well, that is disappointing</p>
      <Link to= '/'>Home Page</Link>
    </div>
  )
}

export default Missing