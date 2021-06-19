// console.log('The file is connected!');

const loginFormHandler = async (event) => {
    event.preventDefault();

    // console.log('clicked the button!');

    // Collect values from the login form
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim(); 
    if (!username || !password) {
        alert('Oop! Looks like you forgot to include your username or password.')
    } else {
        // console.log('username and password included! Nice!');
        // console.log(username);
        // console.log(password);

        // log user in
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);