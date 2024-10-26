function logIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            alert('Logged in successfully');
            window.location.href = 'LMAO.html';
            return;
        }
    }
    alert('Invalid email or password');
}