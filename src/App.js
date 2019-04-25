import React, { Component } from 'react';
import './styles/App.css';
import ProductList from './components/ProductList'
import Header from './components/Header'
import Footer from './components/Footer'

// import { loginLogout } from './actions';



// const mapDispatchToProps = (dispatch) => {
//   return {
//     authenticated: (param) => dispatch(loginLogout({ payload: param }))
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="container">
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
