import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from './Cart'

const mapStateToProps = (state) => {
    return {
        cart: state.addPrice.cart
    }
}

class CartList extends Component {
    render() {
        const { cart } = this.props;
        return (
            cart.map((product, i) => {
                return (
                    <Cart
                        key={i}
                        product={product}
                    />
                );
            })
        )
    }
}

export default connect(mapStateToProps)(CartList);