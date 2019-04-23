import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPrice } from './reducers'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CartPage from './components/CartPage'

import Routes from './components/Routes';

const logger = createLogger()

const rootReducers = combineReducers({ addPrice })

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

// const routing = (
//     <Router>
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/cart">Cart</Link>
//                 </li>
//             </ul>
//             <Route exact path="/" component={App} />
//             <Route path="/cart" component={CartPage} />
//         </div>
//     </Router>
// )

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();