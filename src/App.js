import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList'
import CartList from './components/CartList'

const mapStateToProps = (state) => {
  return {
    totalPrice: state.addPrice.totalPrice
  }
}

class App extends Component {
  render() {
    const { totalPrice } = this.props;

    return (
      <div className="container">
        <div className="header">{totalPrice}</div>
        <div className="content">
          <ProductList />
        </div>
        <div className="footer">Footer</div>
        <div className="cart">
          <CartList />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
