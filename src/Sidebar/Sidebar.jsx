import React from 'react'
import "./Sidebar.css"
import Category from "./Category"
import Price from "./Price"

const Sidebar = ({handleChange}) => {

   
  return (
    <>
        <section className="sidebar">
            <div className="logo-con">
                <h1><img src="https://cdn-icons-png.flaticon.com/128/2731/2731232.png" alt="" style={{"width":"50px"}} /></h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar