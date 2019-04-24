import React from 'react'
import { connect } from 'react-redux';
import './Cart.css'
import { removeFromCart } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (param) => dispatch(removeFromCart({ price: param.price, product: param.product }))
    }
}

const Cart = (props) => {
    const { id, name, desc, image, price } = props.product;
    const { removeFromCart } = props;
    return (
        <div>
            <div className="cart--view">
                <img alt="product-cart" src={image} />
                <div>{name}</div>
                <div>{price}</div>
                <div>{desc}</div>
                <button onClick={() => removeFromCart({ price: price, product: id })}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);