import React from 'react'

const Footer = () => {
  const dayYear = new Date().getFullYear();
  return (
    <footer>&copy; {dayYear}</footer>
  )
}

export default Footer