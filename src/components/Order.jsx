
import Nav from "../Navigation/Nav";
import Products from "../Products/Products";
import Recomended from "../Recomended/Recomended";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Card from "../Components2/Card.jsx";

// Data
import  {datas}  from './Product.js';





const Order = () => {
    
    const [selectCategory, setSelectCategory] = useState(null)
    const [search, setSearch] = useState("")
    
    
    

   
    
    

  
    


    //------------------Input filter------------------------

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }
    const filteredItems = datas.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

    //-------------------Radio Filter------------------
    const handleChange = (event) => {
        setSelectCategory(event.target.value)
    }

    //------------------------Button Filter--------------
    const handleClick = (event) => {
        setSelectCategory(event.target.value)
    }


    //--------------------- 




    function filteredData(products, selected, search) {
        let filteredProducts = datas

        // Filtering Input Items
        if (search) {
            filteredProducts = filteredItems
        }

        //Selected Filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, maincategory, price, title }) =>
                    category === selected ||
                    maincategory === selected ||
                    price === selected ||
                    title === selected
            )
        }

        return filteredProducts.map((product) =>
        (<Card product={product}
             key={product.id}
            // img={product.img}
            // title={product.title}
            // star={product.star}
            // reviews={product.reviews}
            // price={product.price}
        />
        )
        )

    }
    const result = filteredData(datas, selectCategory, search)



    return (
        
            
                <div >
                   
    
                <Sidebar handleChange={handleChange} />
                <Nav search={search} handleInputChange={handleInputChange}  />
                <Recomended handleClick={handleClick} />
                <Products result={result}  />
                
            </div>
            
       

    )
}

export default Order