// script.js

const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
  if (emailInput.value.length > 0) {
    emailInput.classList.add('valid');
  } else {
    emailInput.classList.remove('valid');
  }
});
