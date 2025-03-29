import React, { useState } from 'react'
import Nav from "../Navigation/Nav";
import Products from "../Products/Products";
import Recomended from "../Recomended/Recomended";
import Sidebar from "../Sidebar/Sidebar";

// Data
import { products } from './Product.js';
import Card from '../Components2/Card';

const Order = () => {
    const [selectCategory, setSelectCategory] = useState(null)
    const [query, setQuery] = useState("")

    //------------------Input filter------------------------

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    const filteredItems = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))

    //-------------------Radio Filter------------------
    const handleChange = (event) => {
        setSelectCategory(event.target.value)
    }

    //------------------------Button Filter--------------
    const handleClick = (event) => {
        setSelectCategory(event.target.value)
    }

    function filteredData(products, selected, query) {
        let filteredProducts = products

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems
        }

        //Selected Filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, maincategory, price, title, }) =>
                    category === selected ||
                    maincategory === selected ||
                    price === selected ||
                    title === selected
            )
        }
        return filteredProducts.map(({ id, img, title, star, reviews, price }) =>
        (<Card key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            price={price}
        />
        )
        )

    }
    const result = filteredData(products, selectCategory, query)

    return (
        <div>
            <Sidebar handleChange={handleChange} />
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recomended handleClick={handleClick} />
            <Products result={result} />
        </div>
    )
}

export default Order