import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

//* this is used to ensure users are logged in before they can access certain pages
export default PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            // TODO: we'll probably use cookies and not local storage
            localStorage.getItem('authToken') ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to={{
                        parthname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);