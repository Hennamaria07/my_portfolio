"use strict";

document.getElementById('fname').addEventListener('keyup', (e) => {
    const fname = document.getElementById('fname');
    const regex = /^[A-Za-z]{4,6}$/;
    if(fname.value.length === 0) {
        document.getElementById('fnameErr').textContent = 'first name is required';
        fname.style.border = "solid 2px rgb(255, 170, 0)";
        return false;
    } else if (!fname.value.match(regex)) {
        document.getElementById('fnameErr').textContent = 'the frist name should contain atleast 4 charcters and should not exceed 6 character';
        fname.style.border = "solid 2px rgb(255, 170, 0)";
        return false;
    } else {
        document.getElementById('fnameErr').textContent = "";
        fname.style.border = "";
        return true;
    }
});
document.getElementById('lname').addEventListener('keyup', (e) => {
    const lname = document.getElementById('lname');
    const regex = /^[A-Za-z]{4,8}$/;
    if(lname.value.length === 0) {
        document.getElementById('lnameErr').textContent = 'last name is required';
        lname.style.border = "solid 2px rgb(255, 170, 0)";
        return false;
    } else if (!lname.value.match(regex)) {
        document.getElementById('lnameErr').textContent = 'the last name should contain atleast 4 charcters and should not exceed 8 character';
        lname.style.border = "solid 2px rgb(255, 170, 0)";
        return false;
    } else {
        document.getElementById('lnameErr').textContent = "";
        lname.style.border = "";
        return true;
    }
});

document.getElementById('email').addEventListener('keyup', (e) => {
    const email = document.getElementById('email');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;    ;
    if(!email.value.match(regex)) {
        document.getElementById('emailErr').textContent = 'invalid email please enter a valid email';
        email.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    } else {
        document.getElementById('emailErr').textContent = '';
        email.style.border = '';
        return true;
    }
});

document.getElementById('phone').addEventListener('keyup' , (e) => {
    const phone = document.getElementById('phone');
    const regex = /^[6-9]\d{9}$/;
    if(!phone.value.match(regex)) {
        document.getElementById('numberErr').textContent ='invalid phone number';
        phone.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    } else {
        document.getElementById('numberErr').textContent ='';
        phone.style.border = '';
        return true;
    }
});
document.getElementById('message').addEventListener('keyup' , (e) => {
    const message = document.getElementById('message');
    const regex = /^[a-zA-Z\s]{10,500}$/;
    if(!message.value.match(regex)) {
        document.getElementById('messageErr').textContent ='message should not contain any number or symbols and it should contain atleast 10 characters';
        message.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    } else {
        document.getElementById('messageErr').textContent ='';
        message.style.border = '';
        return true;
    }
});

document.getElementById('form-el').addEventListener('click' , (e) => {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    if(fname.value === '' || fname.value === null) {
        document.getElementById('fnameErr').textContent = 'first name is requried';
        fname.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    }
    if(lname.value === '' || lname.value === null) {
        document.getElementById('lnameErr').textContent = 'last name is requried';
        lname.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    }
    if(email.value === '' || email.value === null) {
        document.getElementById('emailErr').textContent = 'email is requried';
        email.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    }
    if(phone.value === '' || phone.value === null) {
        document.getElementById('numberErr').textContent = 'phone number is requried';
        phone.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    }
    if(message.value === '' || message.value === null) {
        document.getElementById('messageErr').textContent = 'message is requried';
        message.style.border = 'solid 2px rgb(255, 170, 0)';
        return false;
    }
});