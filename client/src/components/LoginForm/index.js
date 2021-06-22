import React from 'react';
import './style.css';

// useState stuff 

// function that will be called when user clicks 'submit'
const loginFormHandler = async (event) => {
    event.preventDefault();


};

function LoginForm() {
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
                        <button type="submit" className="btn customBtn" id="submitBtn" onClick={loginFormHandler}>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default LoginForm;