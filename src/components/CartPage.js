import React from 'react'
import { connect } from 'react-redux';
import CartList from './CartList'

const mapStateToProps = (state) => {
    return {
        totalPrice: state.addPrice.totalPrice
    }
}


class CartPage extends React.Component {

    render() {
        const { totalPrice } = this.props;
        const btnStyle = {
            position: "absolute",
            color: "green",
            top: 0,
            right: 0
        }

        return (
            <div className="container">
                <div className="header">{totalPrice}</div>
                <div className="content">
                    <button style={btnStyle}>Checkout</button>
                    <CartList />
                </div>
                <div className="footer">Footer</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CartPage);