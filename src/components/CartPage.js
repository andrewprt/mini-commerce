import React from 'react'
import CartList from './CartList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { confirmAlert } from 'react-confirm-alert';
import '../styles/react-confirm-alert.css';

const mapStateToProps = (state) => {
    return {
        totalPrice: state.editCart.totalPrice,
        cart: state.editCart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkout: (param) => dispatch(checkout({}))
    }
}

class CartPage extends React.Component {
    render() {
        const { checkout, totalPrice, cart } = this.props;
        const message = "Total Price: Rp. " + totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const submit = () => {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='react-confirm-alert-body'>
                            <h1>Are you sure want to checkout?</h1>
                            <p>{message}</p>
                            <div className="react-confirm-alert-button-group">
                                <button className="react-confirm-alert-button"
                                    onClick={() => { checkout(); onClose(); }}>
                                    Proceed
                                </button>
                                <button className="react-confirm-alert-button" onClick={onClose}>Cancel</button>
                            </div>
                        </div>
                    );
                }
            });
        };

        return (
            <div className="container">
                <Header auth={this.props.auth} />
                <div className="cart--content">

                    {
                        cart.length > 0
                            ?
                            <div className="cart--checkout" onClick={submit}></div>
                            :
                            <br />
                    }
                    <div className="cart--list">
                        {
                            cart.length > 0
                                ?
                                <CartList />
                                :
                                <div className="cart--empty"></div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);