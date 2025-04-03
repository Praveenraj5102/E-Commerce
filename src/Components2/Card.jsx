import React, { useContext, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { data } from 'react-router-dom';
import { cartContext } from '../App';
import { toast } from "react-toastify";

// img, title, reviews, price
const Card = ({ product}) => {

  

const {cart,setCart}=useContext(cartContext)

        const addCart=()=>{
        const existingProduct =cart.find((cartProduct)=>cartProduct.id === product.id)
        
        if(existingProduct){
            const existingProductUpdate=cart.map((cartProduct)=>cartProduct.id===product.id ? {...cartProduct,quantity : cartProduct.quantity+1}:cartProduct)
            setCart(existingProductUpdate)
        }
        else{
            setCart([...cart,{...product,quantity:1}])
        }
        toast.success("Successfully add to cart")
    }


// const addCart=()=>{
//   setCart([...cart,product])

// }
const removeCart=()=>{
  setCart(cart.filter((c)=>c.id!==product.id))
}







  
  return (
    <div>
      <section className='card' key={Math.random()}>
        <img src={product.img} alt={product.title} className='pcard-img' />
        <div className="pcard-details">
          <h3 className='pcard-title'>
            {product.title}
          </h3>
        </div>
        <section className="card-reviews">
          <AiFillStar className='rating-star' />
          <AiFillStar className='rating-star' />
          <AiFillStar className='rating-star' />
          <AiFillStar className='rating-star' />
          <span className='total-reviews'>{product.reviews} </span>
        </section>
        <section className="pcard-price">
          <div className="price">
            <MdOutlineCurrencyRupee /> {product.price}
          </div>
          <div className="bag" onClick={addCart} >
            <IoBagHandleSharp className='bag-icon' />
          </div>
        </section>
      </section>
    </div>
  )
}

export default Card