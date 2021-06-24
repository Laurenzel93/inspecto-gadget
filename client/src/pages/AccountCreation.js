import React from 'react';
// used to change the title of the document (title user sees in tab)
import { Helmet } from 'react-helmet';
import AccountCreationForm from '../components/AccountCreationForm';
import Nav from '../components/Nav';

function AccountCreation() {
    return (
        <div>
            <Helmet>
                <title>Create Account</title>
            </Helmet>
            <Nav />
            <AccountCreationForm />
        </div>
    )
}

export default AccountCreation;