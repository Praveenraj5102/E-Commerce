import React from 'react'
// import {assets} from "../assets/assets"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  const click=()=>{
navigate("/home/order")
  }
  return (
    
    <div className=" container" >
        <div className='navbar-container '>
            {/* <img src={assets.logo} alt=""   /> */}
            <ul  >
               <li> <a href="#Header" >Home</a></li> 
               <li> <a href="#Features" >Features</a></li> 
               <li> <a href="#About" >About</a></li> 
               <li> <a href="#Products" >Products</a></li> 
               <li> <a href="#Services" >Services</a></li> 
               <li> <a href="#Contact" >Contact</a></li> 
               <li><a onClick={click}>Order</a> </li>
            </ul>
            
           
        </div>
    </div>
  )
}

export default Navbar