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
    let users = JSON.parse(localStorage.getItem('users')) || [];
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