document.addEventListener('DOMContentLoaded', checkLoginStatus);

function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("userDisplay").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("username").textContent = loggedInUser;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

function logIn() {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Users:', users); // Log the users array
    console.log('Email:', email, 'Password:', password); // Log input values

    if (email === "" || password === "") {
        alert('Enter email and password');
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(users[i].name));
            alert('Login successful');
            window.location.href = 'index.html';
            return;
        }
    }
    alert('Invalid email or password');
}
