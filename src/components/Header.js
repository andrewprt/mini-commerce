import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const mapStateToProps = (state) => {
    return {
        totalPrice: state.editCart.totalPrice
    }
}

class Header extends Component {
    login = () => {
        this.props.auth.login();
        localStorage.setItem('loggedIn', true)
        // this.props.authenticated(true);
    }

    logout = () => {
        this.props.auth.logout();
        localStorage.setItem('loggedIn', false)
    }

    render() {
        const { totalPrice } = this.props;
        const { isAuthenticated } = this.props.auth;

        const formatPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return (
            <div className="header">
                <Link to="/" className="logo"></Link>

                <Link to="/cart" className="cart--logo"><div className="cart--logo_img"></div></Link>

                <div className="price">Rp. {formatPrice}</div>
                {
                    !isAuthenticated() &&
                    <div className="signButton" onClick={this.login}>Sign In</div>
                }
                {
                    isAuthenticated() &&
                    <div className="signButton" onClick={this.logout}>Sign Out</div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Header);