import React from 'react'
import Button from "../Components2/Buttons"
import "./Recomended.css"
const Recomended = ({handleClick}) => {
  return (
    <>
    <div>
      <h2 className='recomended-title'>Recommended</h2>
      <div className='recomended-flex'>
        <button onClick={handleClick} value="" className="rbtns">All Foods</button>
        <button onClick={handleClick} value="Dosa" className="rbtns">Dosa</button>
        <button onClick={handleClick} value="Idly" className="rbtns">Idly</button>
        <button onClick={handleClick} value="Parota" className="rbtns">Parota</button>
        <button onClick={handleClick} value="Pongal" className="rbtns">Pongal</button>
        <button onClick={handleClick} value="Fried rice" className="rbtns">Fried Rice</button>
        <button onClick={handleClick} value="Biriyani" className="rbtns">Biriyani</button>
        <button onClick={handleClick} value="curry" className="rbtns">Curry</button>
       
      </div>
    </div>
    </>
  
  )
}
export default Recomended

