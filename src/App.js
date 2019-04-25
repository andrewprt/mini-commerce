import React, { Component } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* pass auth to component by props */}
        <Header auth={this.props.auth} />
        <div className="content">
          <ProductList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
