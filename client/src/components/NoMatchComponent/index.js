import React from 'react';
import { useHistory } from 'react-router';
import './style.css'

function NoMatchComponent() {
    let history = useHistory();

    return (
        <main>
            <div className="headerDiv">
                <h1>Inspecto-Gadget</h1>
            </div>
            <div className='errorDiv'>
                <h1>Oops!</h1>
                <h2>Page not found!</h2>
                <div className='btnWrapper'>
                    <button className="btn backBtn" onClick= {() => history.goBack()}>Go Back</button>
                </div>
            </div>
        </main>
    )
}

export default NoMatchComponent;