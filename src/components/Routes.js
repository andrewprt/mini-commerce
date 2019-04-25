import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from '../components/Callback';
import Auth from '../auth/auth';
import history from '../auth/history';
import App from '../App'
import CartPage from './CartPage';

const auth = new Auth();

//initialize authentication
const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

//settings for routes, which components will be called based on link
//callback is used for signin process. After google aunthentication, callback will be called
const Routes = () => (
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