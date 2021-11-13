const form = document.querySelector('.contact-form');
const errorMessage = 'Email must contain only lower case characters! Try again.';

function showMessage() {
    const div = document.querySelector('.error-msg');
    div.innerHTML = `<p>${errorMessage}</p>`;
    div.style.display = "block"
}

function validateEmail(input) {
    const value = input.toLowerCase();
    if (value.localeCompare(input) === 0) {
        return true;
    }
    return false;
}

form.addEventListener('submit', (event) => {
    const div = document.querySelector('.error-msg');
    event.preventDefault();
    const email = form.elements[1];
    const returnValue = validateEmail(email.value);
    if (returnValue) {
        div.remove();
        form.submit();
        form.reset();
    } else {
        showMessage();
    }
});