import React from 'react'
import CartList from './CartList'
import Header from './Header'
import Footer from './Footer'

class CartPage extends React.Component {

    render() {
        const btnStyle = {
            position: "absolute",
            color: "green",
            top: 0,
            right: 0
        }

        return (
            <div className="container">
                <Header auth={this.props.auth} />
                <div className="content">
                    <button style={btnStyle}>Checkout</button>
                    <CartList />
                </div>
                <Footer />
            </div>
        )
    }
}

export default CartPage;