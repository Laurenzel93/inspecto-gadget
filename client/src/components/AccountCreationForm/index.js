import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AccountCreationForm() {
    const name = useFormInput('');
    const username = useFormInput('');
    const password = useFormInput('');
    const role = useFormInput('');

    const history = useHistory();

    const createAccountHandler = e => {
        e.preventDefault();

        // console.log('name: ' + name.value);
        // console.log('username: ' + username.value);
        // console.log('password: ' + password.value);
        // console.log('role: ' + role.value);

        axios.post('/api/users/create', {
            name: name.value,
            username: username.value,
            password: password.value,
            role: role.value
        })
        .then(res => {
            console.log(res);
            // history.push('/dashboard');
        })
        .catch(err => console.log(err));
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
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" {...username} className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" {...password} className="form-control" id="password" />
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