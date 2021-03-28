// form validation
const elUsername = document.querySelector('#username');
const elEmail = document.querySelector('#email');
const elPassword = document.querySelector('#password');
const elForm = document.querySelector('#signup');

function checkUsername () {
    const minLength = 5;

    if (elUsername.value.trim() === '') {
        showError(elUsername, 'Username cannot be blank.');
    } else if (elUsername.value.length < minLength) {
        showError(elUsername, `Username must be ${minLength} characters or more.`);
    } else {
        showSuccess(elUsername);
    }
}

function checkEmail() {
    if (elEmail.value.trim() === '') {
        showError(elEmail, 'Email cannot be blank.');
    } else if (!isEmailValid(elEmail.value.trim())) {
        showError(elEmail, 'Not a valid email.');
    } else {
        showSuccess(elEmail);
    }
 }

 function checkPassword() {
    const minLength = 3;

    if (elPassword.value.trim() === '') {
        showError(elPassword, 'Password cannot be blank.');
    } else if (elPassword.value.length < minLength) {
        showError(elPassword, `Password must be ${minLength} characters or more.`);
    }else {
        showSuccess(elPassword);
    }
 }

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.classList.add('error');
    formControl.classList.remove('success');
    small.innerHTML = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerHTML= '';
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

elForm.addEventListener('submit', function (e) {
    e.preventDefault();

    checkUsername();
    checkEmail();
    checkPassword();
});

elUsername.addEventListener('blur', () => {
    checkUsername();
}, false);

elEmail.addEventListener('blur', () => {
    checkEmail();
}, false);

elPassword.addEventListener('blur', () => {
    checkPassword();
}, false);