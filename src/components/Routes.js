import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from '../components/Callback';
import Auth from '../auth/auth';
import history from '../auth/history';
import App from '../App'
import CartPage from './CartPage';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

const Routes = () => (
    // <Router history={history} component={Home}>
    //     <div>
    //         <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
    //         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
    //         <Route path="/callback" render={(props) => {
    //             handleAuthentication(props);
    //             return <Callback {...props} />
    //         }} />
    //     </div>
    // </Router>

    <Router history={history} component={App}>
        <div>
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/cart" render={(props) => <CartPage auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
            }} />
        </div>
    </Router>
);

export default Routes;