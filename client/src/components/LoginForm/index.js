import { useState } from 'react';
import { setUserSession } from '../../utils/Session';
import  { login } from '../../utils/API'
import './style.css';


    
function LoginForm(props) {

    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
   
    const loginHandler = () => {
        console.log('hello')

        // setError(null);
        // setLoading(true);
        // API.login( { username: username.value, password: password.value }).then(res => {
        //     setLoading(false);
        //     setUserSession(res.data.token, res.data.user);
        //     props.history.push('/dashboard')
        // }).catch(error => {
        //     setLoading(false);
        //     if (error.response.status === 401) {
        //         setError(error.response.data.message);
        //     } else {
        //         setError("Something went wrong. Please try again later");
        //     };
        // });
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
                        <input type="text" {...username} className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" {...password}className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="btn customBtn" id="submitBtn" onClick={loginHandler}>{loading ? 'Loading...' : 'Login'}</button>
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