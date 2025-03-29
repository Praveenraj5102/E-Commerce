import React from 'react'
import "./Products.css"

// import Card from '../Components2/Card';

const Products = ({ result }) => {
  return (
    <>  
    <section className='card-con'>
      {result}
    </section>
    </>
  )
}

export default Products