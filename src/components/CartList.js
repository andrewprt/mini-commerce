import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from './Cart'

//get state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        cart: state.editCart.cart
    }
}

//will loop from cart list, so each product will have their own individual Cart component
class CartList extends Component {
    render() {
        const { cart } = this.props;
        return (
            cart.map((product, i) => {
                return (
                    <Cart
                        key={i}
                        idx={i}
                        product={product}
                    />
                );
            })
        )
    }
}

//second parameter for dispatch can be left out if we only use mapStateToProps
export default connect(mapStateToProps)(CartList);