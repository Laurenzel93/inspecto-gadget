import React from 'react';
import './style.css';

function AccountCreationForm() {
    return (
        <main>
            <div className="createFormContainer">
                <form className='createForm'>
                    <div id="createAccount" className="form-text">
                        Create an account
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="usernameEntry" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="checkboxContainer">
                        <div id="accountTypeHeader" className="form-text">
                            Account Type
                        </div>
                        <div className="formControlContainer">
                            <select className="form-control customFormControl" id="accountTypeSelector">
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

export default AccountCreationForm;