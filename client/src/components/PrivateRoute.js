
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import API from '../utils/API';
=======
import { isLogin } from '../utils/Private';
>>>>>>> b3360e0a7981ffcb6e5c7fa2d4e9f322b9fe0bb7

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            API.isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;