function logIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Users:', users); // Log the users array
    console.log('Email:', email, 'Password:', password); // Log input values

    if (email === "" || password === "") {
        alert('Enter email and password');
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            alert('Logged in successfully');
            window.location.href = 'LMAO.html';
            return;
        }
    }
    alert('Invalid email or password');
}
