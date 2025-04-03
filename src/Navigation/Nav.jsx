import "./Nav.css" 
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart ,AiOutlineUserAdd} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from '../App';
import React, { useContext, useState } from 'react'

const Nav = ({handleInputChange,search}) => {

  const {cart}=useContext(cartContext)

 const navigate=useNavigate()
   const click=()=>{
 navigate("/home/order/cart")
   }
  return (
   <nav>
     <div className="nav-container">
      <input 
      type="text" 
      placeholder="Enter Your Search"
      className="search-input" 
      onChange={handleInputChange}
      value={search}
      />
    </div>
    <div className="profile-container">
      <a href="#">
      <FiHeart className="nav-icons"/>
      </a>
      <a onClick={click}>
       
      <AiOutlineShoppingCart className="nav-icons"/>
      <span style={{color:"orange", fontWeight:"600"}}>{cart.length}</span>
      </a>
      <a href="#">
      <AiOutlineUserAdd className="nav-icons"/>
      </a>
    </div>
   </nav>
   
  )
}

export default Nav;