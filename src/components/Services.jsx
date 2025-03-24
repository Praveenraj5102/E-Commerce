import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <section className='services' id='Services'>
        <div className="section-title services-title">
            <h3>Explore</h3>
            <h2>Our Services</h2>
        </div>
        <div className="section-center clearfix">
            <div className="service-card">
                <div className="service-img-container">
                    <img  className='service-img' src="https://img.freepik.com/free-photo/healthy-salad-with-salmon-tomatoes-mushrooms-lettuce-lentil-dark_2829-11077.jpg?t=st=1742693625~exp=1742697225~hmac=d38fb1386baa91c0052f1af5472466cda25eec0b52b80a7936379593b38f15d2&w=996" alt="" />
                    <span className='service-icon'><i class='bx bx-dish' undefined ></i></span>
                </div>
                <div className="service-info">
                    <h4>Custom Recipes</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde aut laudantium, sapiente impedit labore dicta et sint fugit. Molestiae!</p>
                    <a href="#" className='btn service-btn'>Read More</a>
                </div>
            </div>
            <div className="service-card">
                <div className="service-img-container">
                    <img className='service-img' src="https://img.freepik.com/free-photo/healthy-salad-with-salmon-tomatoes-mushrooms-lettuce-lentil-dark_2829-11077.jpg?t=st=1742693625~exp=1742697225~hmac=d38fb1386baa91c0052f1af5472466cda25eec0b52b80a7936379593b38f15d2&w=996" alt="" />
                    <span className='service-icon'><i class='bx bx-home-smile'></i></span>
                </div>
                <div className="service-info">
                    <h4>Home Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde aut laudantium, sapiente impedit labore dicta et sint fugit. Molestiae!</p>
                    <a href="#" className='btn service-btn'>Read More</a>
                </div>
            </div>
            <div className="service-card">
                <div className="service-img-container">
                    <img className='service-img' src="https://img.freepik.com/free-photo/healthy-salad-with-salmon-tomatoes-mushrooms-lettuce-lentil-dark_2829-11077.jpg?t=st=1742693625~exp=1742697225~hmac=d38fb1386baa91c0052f1af5472466cda25eec0b52b80a7936379593b38f15d2&w=996" alt="" />
                    <span className='service-icon'><i class='bx bx-timer'></i></span>
                </div>
                <div className="service-info">
                    <h4>Free Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde aut laudantium, sapiente impedit labore dicta et sint fugit. Molestiae!</p>
                    <a href="#" className='btn service-btn'>Read More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services