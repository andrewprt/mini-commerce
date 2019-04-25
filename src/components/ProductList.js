import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { products } from '../products'

//get searchField state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        searchField: state.searchProduct.searchField
    }
}

//will loop from products list, so each product will have their own individual Product component
const ProductList = (props) => {
    const { searchField } = props;

    //filter products based on searchField
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
        filteredProducts.map((product, i) => {
            return (
                <Product
                    key={i}
                    product={product}
                />
            );
        })
    )
}

export default connect(mapStateToProps)(ProductList);