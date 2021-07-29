import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function AccountCreationForm() {
    const name = useFormInput('');
    const email = useFormInput('');
    const username = useFormInput('');
    const password = useFormInput('');
    const passwordCheck = useFormInput('');
    const role = useFormInput('');

    const history = useHistory();

    const createAccountHandler = e => {
        e.preventDefault();

        // console.log('name: ' + name.value);
        // console.log('username: ' + username.value);
        // console.log('password: ' + password.value);
        // console.log('role: ' + role.value);

        if (name.value === '') {
            // console.log('name not included');

            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Please provide account holder\'s name</span>',
                background: '#343a40'
            })
        } else if (email.value === '') {
            // console.log('email not included');

            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Please provide an email</span>',
                background: '#343a40'
            })
        } else if (username.value === '') {
            // console.log('username not included');

            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Please provide a username</span>',
                background: '#343a40'
            })
        } else if (password.value.length < 9) {
            // console.log('pass length is less than 9 characters: ', password.value.length);

            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Password must have at least 9 characters</span>',
                background: '#343a40'
            })
        } else if (passwordCheck.value === '') {
            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Please type password again.</span>',
                background: '#343a40'
            })
        } else if (password.value !== passwordCheck.value) {
            Swal.fire({
                icon: 'error',
                title: '<span>Oops...</span>',
                html: '<span>The passwords you entered do not match.</span>',
                background: '#343a40'
            })
        } else if (role.value === '') {
            // console.log('role not selected');

            Swal.fire({
                icon: 'error',
                title: '<span>Incomplete account information</span>',
                html: '<span>Please select a role</span>',
                background: '#343a40'
            })

        } else {
            console.log('all info included');

            axios.post('/api/users/create', {
                name: name.value,
                username: username.value,
                email: email.value,
                password: password.value,
                role: role.value
            })
                .then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            iconColor: '#b8daff',
                            title: '<span>Account created successfully</span>',
                            showConfirmButton: false,
                            background: '#343a40',
                            timer: 1500
                        })
                    }
                })
                .then(res => {
                    // console.log(res);
                    history.push('/dashboard');
                })
                //TODO: show responses specific to different errors
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: '<span>Incomplete account information</span>',
                        html: '<span>Please be sure you filled out the form correctly</span>',
                        background: '#343a40'
                    })
                });
        }
    }

    const showOrHidePassword = () => {
        const passwordInput = document.getElementById('password');
        if (passwordInput.getAttribute('type') === 'text') {
            passwordInput.setAttribute('type', 'password');
        } else if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
        }
    };

    const showOrHidePasswordCheck = () => {
        const passwordCheckInput = document.getElementById('passwordCheck');
        if (passwordCheckInput.getAttribute('type') === 'text') {
            passwordCheckInput.setAttribute('type', 'password');
        } else if (passwordCheckInput.getAttribute('type') === 'password') {
            passwordCheckInput.setAttribute('type', 'text');
        }
    }

    return (
        <main>
            <div className="createFormContainer">
                <form className='createForm' onSubmit={createAccountHandler}>
                    <div id="createAccount" className="form-text">
                        Create an account
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" {...name} className="form-control" id="name" aria-describedby="nameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" {...email} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" {...username} className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="passwordRow">
                            <input type="password" {...password} className="form-control" id="password" />
                            <button type='button' id='eye' onClick={showOrHidePassword}>
                                <img src='https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png' alt='show/hide password' />
                            </button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Retype password</label>
                        <div className="passwordRow">
                            <input type="password" {...passwordCheck} className="form-control" id="passwordCheck" />
                            <button type='button' id='eyeCheck' onClick={showOrHidePasswordCheck}>
                                <img src='https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png' alt='show/hide password' />
                            </button>
                        </div>
                    </div>
                    <div className="checkboxContainer">
                        <div id="accountTypeHeader" className="form-text">
                            Account Type
                        </div>
                        <div className="formControlContainer">
                            <select className="form-control customFormControl" {...role} id="accountTypeSelector">
                                <option>Select one</option>
                                <option>Admin</option>
                                <option>Inspector</option>
                            </select>
                        </div>
                    </div>
                    <div className="btnContainer">
                        <button type="submit" className="btn customBtn">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )

}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

export default AccountCreationForm;