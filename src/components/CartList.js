import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from './Cart'

const mapStateToProps = (state) => {
    return {
        cart: state.editCart.cart
    }
}

class CartList extends Component {
    render() {
        const { cart } = this.props;
        return (
            cart.length === 0
                ?
                "Your cart is empty!"
                :
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