import React from 'react'
import { connect } from 'react-redux';
import './Product.css'
import { setTotalPrice } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setTotalPrice: (price, product) => dispatch(setTotalPrice({ price: price, product: product }))
    }
}

const Product = (props) => {
    const { id, name, desc, image, price } = props.product;
    const { setTotalPrice } = props;
    return (
        <div className="product--view">
            <img alt="product" src={image} />
            <div>{name}</div>
            <div>{price}</div>
            <div>{desc}</div>
            <button onClick={() => setTotalPrice(price, props.product)}>Add to Cart</button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Product);