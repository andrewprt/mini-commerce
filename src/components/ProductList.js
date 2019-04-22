import React from 'react'
import Product from './Product'
import { products } from '../products'

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