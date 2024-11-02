function signUp() {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "" || name == "") {
        alert('Enter email, password and name');
        return;
    }
    const user = {
        name: name,
        email: email,
        password: password
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('User email already exists');
            return;
        }
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'login.html';
}