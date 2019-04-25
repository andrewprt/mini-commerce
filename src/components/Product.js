import React from 'react'
import { connect } from 'react-redux';
import '../styles/Product.css'
import { addToCart } from '../actions';

//flow: this dispatch() will go to actions.js
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (price, product) => dispatch(addToCart({ price: price, product: product }))
    }
}

const Product = (props) => {
    //we get props.product from ProductList component
    const { name, desc, image, price } = props.product;
    //get addToCart from mapDispatchToProps
    const { addToCart } = props;

    //we use JSON.parse to convert from string type to boolean
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <div className="product--view">
            <img alt="product" src={image} />
            <div className="product--desc">
                <div>{name}</div>
                <div>Rp. {formatPrice}</div>
                <div>{desc}</div>
                {/* user can only addToCart if logged in */}
                {/* will call addToCart from mapDispatchToProps */}
                {
                    loggedIn === true ? <div className="btnAddToCart"
                        onClick={() => addToCart(price, props.product)}>&nbsp;</div> : null
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Product);