const form = document.querySelector(".contact-form");
const errorMessage= "Email must contains only lower case characters";


function showMessage(){
const div = document.querySelector('.error-msg');
div.innerHTML= `<p>${errorMessage}</p>`;
} 

