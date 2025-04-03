import React, { useEffect, useState, useContext } from 'react'
import "./Cart.css"
import { toast } from "react-toastify";
import { cartContext } from '../App';
import { MdOutlineCurrencyRupee } from "react-icons/md";


const Cart = () => {
  const { cart, setCart } = useContext(cartContext)

  const[totalItems,setTotalItems]=useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    // setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
    const totalItems=cart.reduce((acc,curr)=>acc+parseInt(curr.quantity),0)
    const totalPrice=cart.reduce((acc,curr)=>acc+curr.price*parseInt(curr.quantity),0)
    setTotalItems(totalItems)
    setTotal(totalPrice)
  }, [cart])



  const removeCart=(id)=>{
    setCart(cart.filter((c)=>c.id!==id))
    toast.success("Remove Cart successfully")
  }
  const checkout=()=>{
    toast.success("Checkout Successfully")
  }


  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      {cart.length > 0 && (      
      <><div className="cart-container">
          {cart.map((product) => (
            <div className="cart-product" key={Math.random()}>
              <div className="img">
                <img src={product.img} alt={product.title} />
              </div>
              
              <div className="cart-product-details">
                <h3> {product.title} </h3>
                <p className='pp'>Price Rs: {product.price} </p>
              </div>
              <div className='quantity'>Quantity : {product.quantity} </div>
             
              <button class="button-62" onClick={()=>removeCart(product.id)} role="button">Remove</button>
            </div>
          ))}
        </div>
        <h1 className='cart-total-item'>Total Items : {totalItems}</h1>
        <h1 className="cart-amt">Total Amount : {total}</h1>
        <button onClick={checkout} class="button-33" role="button">Checkout</button>
        </>)
        }
      {cart.length === 0 && <p>No Items in this Cart</p>}
      
    </>
  )
}

export default Cart