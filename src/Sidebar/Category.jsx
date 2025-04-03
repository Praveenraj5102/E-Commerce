
import "./Category.css"
import Input from '../Components2/Input'
const Category = ({handleChange}) => {

  return (
    <div >
      <h2 className='sidebar-title'>Category</h2>
      <div className='sidebar-items'>
        <label className='sidebar-label-container'>
          <input className='user-select'  type="radio" onChange={handleChange} value="" name="test" />
          <span className='checkmark'></span>All
        </label>
      </div>
      
      <Input
      handleChange={handleChange}
      value="veg"
      title="Veg"
      name="test"/>
      <Input
      handleChange={handleChange}
      value="Non-Veg"
      title="Non-Veg"
      name="test"/>
      <Input
      handleChange={handleChange}
      value="sweet"
      title="Sweets"
      name="test"/>
      <Input
      handleChange={handleChange}
      value="Juice"
      title="Juices"
      name="test"/>
    </div>

  )
}

export default Category