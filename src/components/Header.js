import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        totalPrice: state.editCart.totalPrice
    }
}

class Header extends Component {
    login = () => {
        this.props.auth.login();
        sessionStorage.setItem('loggedIn', true)
        // this.props.authenticated(true);
    }

    logout = () => {
        this.props.auth.logout();
        sessionStorage.setItem('loggedIn', false)
    }

    render() {
        const { totalPrice } = this.props;
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="header">
                <Link to="/" className="logo"></Link>

                <Link to="/cart" className="cart"></Link>

                <div className="price">Rp. {totalPrice}</div>
                {
                    !isAuthenticated() &&
                    <button style={{ cursor: 'pointer' }} onClick={this.login}>Log In</button>
                }
                {
                    isAuthenticated() &&
                    <button style={{ cursor: 'pointer' }} onClick={this.logout}>Log Out</button>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Header);