import React from "react";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import Order from "./components/Order";
import Cart from "./Cart/Cart"
import  {datas}  from "./components/Product";

import  { useState, createContext } from 'react'

export const cartContext=createContext()


const App = () => {
  
  const [cart,setCart]=useState([])

  
  

  return (

    <>
   <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/order" element={<Order  />}/>
          <Route path="/home/order/cart" element={<Cart  />}/>
        </Routes>
      </BrowserRouter>
      </cartContext.Provider>

    </>
  );
};

export default App;
