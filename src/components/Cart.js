import React from 'react'
import { connect } from 'react-redux';
import './Cart.css'
import { setTotalPrice } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        setTotalPrice: (param) => dispatch(setTotalPrice({ price: param.product, product: param.product }))
    }
}

const Cart = (props) => {
    const { id, name, desc, image, price } = props.product;
    const { onBtnAddClick } = props;
    return (
        <div className="cart--view">
            <img alt="product-cart" src={image} />
            <div>{name}</div>
            <div>{price}</div>
            <div>{desc}</div>
            <button onClick={() => setTotalPrice({ price: name, product: name })}>Add to Cart</button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);