import React from 'react'
import { connect } from 'react-redux';
import '../styles/Product.css'
import { removeFromCart } from '../actions';

//flow: this dispatch() will go to actions.js
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (param) => dispatch(removeFromCart({ price: param.price, product: param.product, idx: param.idx }))
    }
}

const Cart = (props) => {
    //we get props.product from CartList component
    const { author, image, price, qty } = props.product;
    //get removeFromCart from mapDispatchToProps
    const { removeFromCart } = props;

    //styles object for product--view class. We use product--view in both Product and Cart. 
    // But in Cart i want to use different style
    const styles = {
        marginRight: "1.5rem"
    }

    //function to format string to have thousand separators
    function formatMoney(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const formatPrice = formatMoney(price);
    const formatPriceTotal = formatMoney(price * qty);

    return (
        <div className="product--view" style={styles}>
            <img alt="product-cart" src={image} />
            <div className="product--desc">
                <div>{author}</div>
                {/* if product qty is more than 1, total price for that product will be displayed */}
                <div>{formatPrice} {parseInt(qty) > 1 ? `(${formatPriceTotal})` : null}</div>
                <div>Qty : {qty}</div>
                {/* will call removeFromCart from mapDispatchToProps */}
                <div className="btnRmvFromCart"
                    onClick={() => removeFromCart({ product: props.product, idx: props.idx })}>
                </div>
            </div>
        </div>
    )
}

//first parameter must be null if we only use mapDispatchToProps
export default connect(null, mapDispatchToProps)(Cart);