import React from 'react';
// used to change the title of the document (title user sees in tab)
import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <div className="jumbo">
                <div className="container">
                    <h2 className="">Welcome to the City of Orchard Lake Inspections App</h2>
                </div>
            </div>
            <LoginForm />
        </div>
    )
}

export default Login;