const inputEl = document.getElementById('name-input');

const nameEl = document.getElementById('name-output');

function changeNameEl(event) {
  const inputValue = event.target.value.trim('');
  if (inputValue === '') {
    return;
  }
  nameEl.textContent = event.target.value.trim('');
}

inputEl.addEventListener('input', changeNameEl);
