import React from 'react'
import { connect } from 'react-redux';
import '../styles/Product.css'
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

    const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <div className="product--view">
            <img alt="product" src={image} />
            <div className="product--desc">
                <div>{name}</div>
                <div>Rp. {formatPrice}</div>
                <div>{desc}</div>
                {
                    loggedIn === true ? <div className="btnAddToCart"
                        onClick={() => addToCart(price, props.product)}>&nbsp;</div> : null
                }
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Product);