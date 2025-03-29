import React from 'react'
import "./Price.css"
// import { MdOutlineCurrencyRupee } from "react-icons/md";
import Input from '../Components2/Input';

const Price = ({handleChange}) => {
//   const handleChange = (event) => {
//     setSelectCategory(event.target.value)
// }
  return (
   <>
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <div className='sidebar-items'>
        <label className='sidebar-label-container'>
          <input className='user-select'  type="radio" onChange={handleChange} value="" name="test2" />
          <span className='checkmark'></span>All
        </label>
      </div>
      
      <Input
      handleChange={handleChange}
    value={100}
      title="$0-100"
      name="test2"
      />
      <Input
      handleChange={handleChange}
     value={200}
      title="$100-200"
      name="test2"
      />
      <Input
      handleChange={handleChange}
     value={300}
      title="$200-300"
      name="test2"
      />
      <Input
      handleChange={handleChange}
    value={400}
      title="$300-400"
      name="test2"
      />
      <Input
      handleChange={handleChange}
value={500}
      title="$400 Above"
      name="test2"
      />

    </div>
   </>
  )
}

export default Price