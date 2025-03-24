import React from 'react'
// import {assets} from "../assets/assets"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className=" container" >
        <div className='nav-container '>
            {/* <img src={assets.logo} alt=""   /> */}
            <ul  >
               <li> <a href="#Header" >Home</a></li> 
               <li> <a href="#Features" >Features</a></li> 
               <li> <a href="#About" >About</a></li> 
               <li> <a href="#Products" >Products</a></li> 
               <li> <a href="#Services" >Services</a></li> 
               <li> <a href="#Contact" >Contact</a></li> 
            </ul>
            
           
        </div>
    </div>
  )
}

export default Navbar