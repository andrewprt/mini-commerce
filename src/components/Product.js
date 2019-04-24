import React from 'react'
import { connect } from 'react-redux';
import './Product.css'
import { addToCart } from '../actions';

// const mapStateToProps = (state) => {
//     return {
//         loggedIn: state.logging.loggedIn
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (price, product) => dispatch(addToCart({ price: price, product: product }))
    }
}

const Product = (props) => {
    const { name, desc, image, price } = props.product;
    const { addToCart } = props;

    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    return (
        <div className="product--view">
            <img alt="product" src={image} />
            <div>{name}</div>
            <div>{price}</div>
            <div>{desc}</div>
            {
                loggedIn === true ? <button onClick={() => addToCart(price, props.product)}>Add to Cart</button> : null
            }
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Product);