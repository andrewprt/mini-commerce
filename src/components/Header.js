import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const mapStateToProps = (state) => {
    return {
        totalPrice: state.editCart.totalPrice
    }
}

class Header extends Component {
    //login and logout will setItem loggedIn in localStorage, to be used as condition in Add to Cart & Checkout
    login = () => {
        this.props.auth.login();
        localStorage.setItem('loggedIn', true);
    }

    logout = () => {
        this.props.auth.logout();
        localStorage.setItem('loggedIn', false)
    }

    render() {
        const { totalPrice } = this.props;
        const { isAuthenticated } = this.props.auth;

        //make thousand separators to totalPrice
        const formatPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return (
            <div className="header">
                <Link to="/" className="logo"></Link>
                <Link to="/cart" className="cart--logo"><div className="cart--logo_img"></div></Link>

                <div className="price">Rp. {formatPrice}</div>
                {
                    //if user isn't logged in yet, Sign In button will show up instead of Sign Out button
                    !isAuthenticated() &&
                    <div className="signButton" onClick={this.login}>Sign In</div>
                }
                {
                    //Sign out button, if clicked will immediately do logout process
                    isAuthenticated() &&
                    <div className="signButton" onClick={this.logout}>Sign Out</div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Header);