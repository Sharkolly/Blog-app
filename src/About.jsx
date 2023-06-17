import { useState, useReducer,useEffect, useRef } from "react"
import React from 'react'

const About = () => {

  const touchMe = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    touchMe.current.focus();
  }

  return (
    <div className='post'>
      <h1>About</h1>
      <p>This blog app </p>

    <input type="text" ref={touchMe} id="id"/>
    <h1></h1>
    <button onClick={clickHandler}> click me</button>
    </div>
  )
}

export default About