import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUser } from '../utils/Session';
// used to change the title of the document (title user sees in tab)
import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';

function Login() {

    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUser() != null) {
            history.push('/dashboard');
        }
    })

    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <div className="jumbo">
                <div className="container">
                    <h2 className="jumboHeading">Welcome to the City of Orchard Lake Inspections App</h2>
                </div>
            </div>
            <LoginForm />
        </div>
    )
}

export default Login;