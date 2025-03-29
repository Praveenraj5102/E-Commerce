
import React from 'react'

const Buttons = ({onclickHandler,value,titel}) => {
  return (
    
        <button onClick={onclickHandler} value={value} className="btns">
          {titel}
        </button>
      
    
  )
}

export default Buttons