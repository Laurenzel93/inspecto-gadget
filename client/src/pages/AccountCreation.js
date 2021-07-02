import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUser } from '../utils/Session';
import { Helmet } from 'react-helmet';
import AccountCreationForm from '../components/AccountCreationForm';
import Nav from '../components/Nav';

function AccountCreation() {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUser() === null) {
            history.push('/login');
        }
    }) 

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