import React from 'react'
import { connect } from 'react-redux';
import './Cart.css'
import { removeFromCart } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (param) => dispatch(removeFromCart({ price: param.price, product: param.product, idx: param.idx }))
    }
}

const Cart = (props) => {
    const { name, desc, image, price, qty } = props.product;
    const { removeFromCart } = props;
    return (
        <div>
            <div className="cart--view">
                <img alt="product-cart" src={image} />
                <div>{name}</div>
                <div>{price}</div>
                <div>{desc}</div>
                <div>Qty : {qty}</div>
                <button onClick={() => removeFromCart({ price: price, product: props.product, idx: props.idx })}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);