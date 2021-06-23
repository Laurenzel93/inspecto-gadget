import { useState } from 'react';
//import { setUserSession } from './utils/auth';
import  { login } from '../../utils/API'
import './style.css';


    
function LoginForm(props) {

    const useFormInput = (initialValue) =>{
        const [value, setValue] = useState(initialValue) 
    }

    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    
   
    const loginHandler = () => {
        setError(null);
        setLoading(true);
        login( { username: username.value, password: password.value }).then(res => {
            setLoading(false);
            //setUserSession(res.data.token, res.data.user);
            props.history.push('/dashboard')
        })
    }

    return (
        <main>
            <div className="loginFormContainer">
                <form className='loginForm'>
                    <div id="loginHeader" className="form-text">
                        Please enter your account information
                    </div>
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="btn customBtn" id="submitBtn" onClick={loginHandler}>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default LoginForm;