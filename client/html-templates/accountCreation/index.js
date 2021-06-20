const x = document.getElementById("myTopnav");

// sets classNames for #myTopnav for mobile when page loads
document.addEventListener('DOMContentLoaded', function () {
    // console.log('loaded');
    if (window.innerWidth <= 600) {
        x.className = "bigNav"
        console.log('that\'s a tiny screen you have there!');
    }
});

// called whenever hamburger icon clicked
// opens/hides hamburger menu
function openCloseHamburger() {
    // if #myTopnav just has the class .bigNav, add .responsive
    if (x.className === "bigNav") {
        // console.log('x.className === "bigNav"')
        x.className += " responsive";
        // if #myTopnav has both .bigNav and .responsive, take away .responsive and leave .bigNav
    } else {
        x.className = "bigNav";
        // console.log('x.className !== "bigNav"')
    }
}

// function passed into event handler for creating new account 
const createAccountHandler = async (event) => {
    event.preventDefault();

    // console.log('Clicked the button!');

    const accountType = document.querySelector('#accountTypeSelector').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!username || !password || accountType === "Select one") {
        // console.log('username: ' + username);
        // console.log('password: ' + password);
        // console.log('account type: ' + accountType);
        alert('Oops! Looks like you forgot to include a username, password, or account type.');
    } else if (accountType && username && password) {
        // console.log('You included all the information you were asked to provide! Good one!');
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ accountType, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.createForm').addEventListener('submit', createAccountHandler);


// function pass into event handler for logging user out
const logout = async () => {
    // console.log('logged out!')
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert('You have successfully logged out. See you next time, and be well!')
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);

