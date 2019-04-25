import React from 'react'
import Product from './Product'
import { products } from '../products'

//will loop from products list, so each product will have their own individual Product component
const ProductList = () => {
    return (
        products.map((product, i) => {
            return (
                <Product
                    key={i}
                    product={product}
                />
            );
        })
    )
}

export default ProductList;