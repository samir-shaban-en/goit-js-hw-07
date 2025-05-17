const loginformEl = document.querySelector('.login-form');
const inputsEl = document.querySelectorAll('.login-form input');

function submitForm(event) {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log({
    email: emailValue,
    password: passwordValue,
  });

  loginformEl.reset();
}

loginformEl.addEventListener('submit', submitForm);
