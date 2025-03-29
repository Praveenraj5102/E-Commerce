import React from 'react'
import "./OurProducts.css"
const OurProducts = () => {
  return (
    <section className='products' id='Products'>
        <div className='section-center clearfix'>
            <div className="product-info">
                <div className="section-title">
                    <h3>Check Out</h3>
                    <h2>Our Recipe</h2>
                </div>
                <p className='product-text'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque aut accusamus exercitationem provident cupiditate accusantium expedita impedit rem inventore, est nobis enim quos non laborum eveniet totam facilis alias. Eos qui voluptatem quas, cumque, laborum nisi reprehenderit quae velit dolorem ab fugit blanditiis ullam ut voluptates. Aperiam adipisci quod cum, illum magni doloremque facere corrupti delectus architecto molestiae facilis.
                </p>
                <a href="#" className='btn'>Learn More</a>
            </div>
            <div className="product-inventory clearfix">
                <div className="product">
                    <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1742647629~exp=1742651229~hmac=97c68af86cae2b3accd4029bab1119b6c939ac2e9227ab6c6e173c073f038b85&w=996" alt="product" className='product-img'/>
                    <h4 className='product-title'>Chicken skewers </h4>
                    <h4 className='product-price'> ₹ 299.00</h4>
                </div>
                <div className="product">
                    <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1742647629~exp=1742651229~hmac=97c68af86cae2b3accd4029bab1119b6c939ac2e9227ab6c6e173c073f038b85&w=996" alt="product" className='product-img'/>
                    <h4 className='product-title'>Chicken skewers </h4>
                    <h4 className='product-price'> ₹ 299.00</h4>
                </div>
                <div className="product">
                    <img src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1742647629~exp=1742651229~hmac=97c68af86cae2b3accd4029bab1119b6c939ac2e9227ab6c6e173c073f038b85&w=996" alt="product" className='product-img'/>
                    <h4 className='product-title'>Chicken skewers </h4>
                    <h4 className='product-price'> ₹ 299.00</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurProducts