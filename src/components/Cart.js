import React from 'react'
import { connect } from 'react-redux';
import '../styles/Product.css'
import { removeFromCart } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (param) => dispatch(removeFromCart({ price: param.price, product: param.product, idx: param.idx }))
    }
}

const Cart = (props) => {
    const { name, image, price, qty } = props.product;
    const { removeFromCart } = props;
    const styles = {
        marginRight: "1.5rem"
    }

    function formatMoney(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const formatPrice = formatMoney(price);
    const formatPriceTotal = formatMoney(price * qty);

    return (
        <div className="product--view" style={styles}>
            <img alt="product-cart" src={image} />
            <div className="product--desc">
                <div>{name}</div>
                <div>{formatPrice} {parseInt(qty) > 1 ? `(${formatPriceTotal})` : null}</div>
                <div>Qty : {qty}</div>
                <div className="btnRmvFromCart"
                    onClick={() => removeFromCart({ product: props.product, idx: props.idx })}>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Cart);