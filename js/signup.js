function signUp() {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "" || name == "") {
        alert('Enter email, password and name');
        return;
    }

    let confirmPassword = document.getElementById('ConfirmPassword').value;
    
    const user = {
        name: name,
        email: email,
        password: password
    };

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('User email already exists');
            return;
        }
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = 'login.html';
}