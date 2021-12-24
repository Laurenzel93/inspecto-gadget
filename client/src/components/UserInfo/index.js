import { load } from 'dotenv';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import API from '../../utils/API';
import getUsers from '../../utils/API';
import getInspections from '../../utils/API';
import './style.css';

export function UserInfo() {
    const [users, setUsers] = useState([]);
    const [ inspections, setInspections ] = useState([]);

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUsers !== null) {
            loadUsers();
        } else {
            history.push('/login');
        }

        if (getInspections !== null) {
            loadInspections();
        } else {
            history.push('/login');
        }
    }, []);

    // get a list of all users
    async function loadUsers() {
        await API.getUsers()
            .then(res => {
                // console.log('res.data: ', res.data);
                setUsers(res.data);
                // console.log('users', users);
            }).catch(err => console.log(err));
    }

    // get a list of all inspections
    async function loadInspections() {
        await API.getInspections()
            .then(res => {
                console.log('inspection data: ', res.data);
                setInspections(res.data);
                console.log('inspections state: ', inspections);
            })
    }


    let userList = null;
    if (users.length > 0) {
        userList = users.map((user, key) =>{
            return (
                <tr key={key}>
                    <td>{user.name}</td>
                    <td>lastLogin</td>
                    <td>monthlyTotal</td>
                    <td>missingResults</td>
                </tr>
            )
        })
    }

    return (
        <main>
            <div className="userInfoContainer table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Inspector</th>
                            <th scope="col">Last Login</th>
                            <th scope="col">Monthly Inspection Total</th>
                            <th scope="col">Missing Inspection Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        { userList }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default UserInfo;