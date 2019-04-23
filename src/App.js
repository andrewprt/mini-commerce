import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList'

const mapStateToProps = (state) => {
  return {
    totalPrice: state.addPrice.totalPrice
  }
}

class App extends Component {
  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  render() {
    const { totalPrice } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container">
        <div className="header">{totalPrice}</div>
        <div className="content">
          {
            !isAuthenticated() &&
            <a style={{ cursor: 'pointer' }} onClick={this.login}>Log In</a>
          }
          {
            isAuthenticated() &&
            <a style={{ cursor: 'pointer' }} onClick={this.logout}>Log Out</a>
          }
          <ProductList />
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
