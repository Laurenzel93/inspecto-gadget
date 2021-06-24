import { useState } from 'react';
//import { setUserSession } from './utils/auth';
import  { login } from '../../utils/API'
import './style.css';


    
function LoginForm(props) {

    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
   
    const loginHandler = () => {
        console.log(username, password)
        setError(null);
        setLoading(true);
        login( { username: username.value, password: password.value })
            .then(res => {
                setLoading(false);
                //setUserSession(res.data.token, res.data.user);
                props.history.push('/dashboard')
            })
            .catch(error => {
                setLoading(false);
                if(error.response.status === 401) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later");
            })
    }

    return (
        <main>
            <div className="loginFormContainer">
                <form className='loginForm' onSubmit={loginHandler}>
                    <div id="loginHeader" className="form-text">
                        Please enter your account information
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" {...username}className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" {...password}className="form-control" id="password" />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="btn customBtn" id="submitBtn">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default LoginForm;