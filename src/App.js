import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { products } from './products'

class App extends Component {
  render() {
    return (
      <div className="App">
        {products[0].name}
      </div>
    );
  }
}

export default App;
