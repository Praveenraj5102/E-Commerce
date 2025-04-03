import React from 'react'
import "./Products.css"
import { useState } from 'react';
import  {datas}  from '../components/Product.js';
import Card from '../Components2/Card';


const Products = ({result }) => {
  // const [productss]=useState(products)
  
  
  return (
    <>  
    <section className='card-con' >
      {result}
      
    </section>
    </>
  )
}

export default Products