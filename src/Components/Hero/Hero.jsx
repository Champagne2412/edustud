import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Your Journey to Better Learning Starts Here.</h1>
        <p>Discover easy-to-understand lessons, study resources, and tools designed to help you learn at your own pace.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
