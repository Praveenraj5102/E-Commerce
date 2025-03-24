import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
    <div className="section-center">
      <div className="social-icons">
        <a href="" className="icon"><i class='bx bxl-instagram' style={{'color':'#d80d4a' }} ></i></a>
        <a href="" className="icon"><i class='bx bxl-facebook' style={{'color':'#0a28bf'}}  ></i></a>
        <a href="" className="icon"><i class='bx bxl-whatsapp' style={{'color':'#12d80d'}}  ></i></a>
        <a href="" className="icon"><i class='bx bxl-twitter' style={{'color':'#08c2fd'}}  ></i></a>
      </div>
      <h4 className="footer-text">
      <i class='bx bx-copyright'></i> 2025 
      <span className='company'> Foodiee </span>
      all rights reserved
      </h4>
    </div>
  </footer>
  )
}

export default Footer