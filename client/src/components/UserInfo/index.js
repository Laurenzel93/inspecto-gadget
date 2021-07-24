import React from 'react';
import './style.css';

export function UserInfo() {

    return (
        <main>
            <div className="userInfoContainer table">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Inspector</th>
                            <th scope="col">Last Login</th>
                            <th scope="col">Monthly Inspection Total</th>
                            <th scope="col">Missing Inspection Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope="row">inspectorName.props</th>
                        <td>props.Timestamp</td>
                        <td>props.monthlyTotal</td>
                        <td>props.missingResults</td>

                        <tr>
                            <th scope="row">inspectorName.props</th>
                            <td>props.Timestamp</td>
                            <td>props.monthlyTotal</td>
                            <td>props.missingResults</td>
                        </tr>
                        <tr>
                            <th scope="row">inspectorName.props</th>
                            <td>props.Timestamp</td>
                            <td>props.monthlyTotal</td>
                            <td>props.missingResults</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default UserInfo;