import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";

const Card = ({  img, title,  reviews, price }) => {
 
  
  return (
    <div>
      <section className='card'>
              <img src={img} alt={title} className='pcard-img' />
              <div className="pcard-details">
                <h3 className='pcard-title'>
                  {title}
                </h3>
              </div>
              <section className="card-reviews">
              <AiFillStar className='rating-star'/>
              <AiFillStar className='rating-star'/>
              <AiFillStar className='rating-star'/>
              <AiFillStar className='rating-star'/>
                <span className='total-reviews'>{reviews} </span>
              </section>
              <section className="pcard-price">
                <div className="price">
                  <MdOutlineCurrencyRupee /> {price}
                </div>
                <div className="bag">
                  <IoBagHandleSharp className='bag-icon' />
                </div>
              </section>
            </section>
    </div>
  )
}

export default Card