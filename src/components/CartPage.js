import React from 'react'
import CartList from './CartList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux';
import { checkout } from '../actions';
//uses 'react-confirm-alert' package to make a confirmation window
import { confirmAlert } from 'react-confirm-alert';
import '../styles/react-confirm-alert.css';

//get state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        totalPrice: state.editCart.totalPrice,
        cart: state.editCart.cart
    }
}

//call action in actions.js (redux)
const mapDispatchToProps = (dispatch) => {
    return {
        checkout: (param) => dispatch(checkout({}))
    }
}

class CartPage extends React.Component {
    render() {
        const { checkout, totalPrice, cart } = this.props;
        const message = "Total Price: Rp. " + totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        //confirmation window which will appear if user wants to checkout
        //this is a customized UI
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
                    {/* show checkout button if only the cart isn't empty */}
                    {
                        cart.length > 0
                            ?
                            <div className="cart--checkout" onClick={submit}></div>
                            :
                            <br />
                    }
                    <div className="cart--list">
                        {
                            //show image of "empty cart" if there's no product in cart
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

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);