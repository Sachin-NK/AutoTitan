const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelectorAll('.login-link'); // Select all elements with class 'login-link'
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

// Event listener for Register Link
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Event listener for all Login Links (including the one on the register page)
loginLink.forEach(link => {
    link.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
});

// Event listener for Login button
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});