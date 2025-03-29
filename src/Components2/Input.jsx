import React from 'react'
import{MdOutlineCurrencyRupee } from "react-icons/md";

const Input = ({handleChange,value,name,title}) => {

  return (
    <div>
       <div className='sidebar-items'>
      <label className="sidebar-label-container">
          
          <input onChange={handleChange} value={value}  className='user-select' type="radio" name={name} />
          <span className="checkmark" ></span>{title}
        </label>
      </div>
    </div>
  )
}

export default Input