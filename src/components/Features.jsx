import React from 'react'
import "./Features.css"
const Features = () => {
  return (
    <div className='features .clearfix' id='Features'>
      <div className="feature">
        <span className='feature-icon'><i className='bx bx-donate-heart'></i></span>
        <h4 className='feature-title' >Made With Love</h4>
        <p className='feature-text'>Discover heartfelt hospitality in our cozy lovingly accommodations</p>
      </div>
      <div className="feature">
        <span className='feature-icon'><i className='bx bx-restaurant'></i></span>
        <h4 className='feature-title'>Taste</h4>
        <p  className='feature-text'>Savor the love in every biteof our eaquisite crafted cuisine</p>
      </div>
      <div className="feature">
        <span className='feature-icon'><i className='bx bx-coffee'></i></span>
        <h4 className='feature-title'>Energy</h4>
        <p className='feature-text' >Feel the vibrant energy and warmth in out welcoming, lovely atmospier</p>
      </div>
      <div className="feature">
        <span className='feature-icon'><i className='bx bx-trip'></i></span>
        <h4 className='feature-title'>Family Recipe</h4>
        <p className='feature-text'>Enjoy our family recipies,lovingly created for the taste of tredition</p>
      </div>
    </div>
  )
}

export default Features