const inputEl = document.querySelector('#input');
const btnEl = document.querySelector('.btn');
const copyEl = document.querySelector('.fa-copy');
const successCopyEl = document.querySelector('#success-copy');
const clearInputEl = document.querySelector('.fa-trash-can');

btnEl.addEventListener('click', () => {
  generatePassword();
});

copyEl.addEventListener('click', () => {
  copyClipboard();
});

clearInputEl.addEventListener('click', () => {
  inputEl.value = '';
});

function generatePassword() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let result = '';
  for (let i = 0; i < 12; i++) {
    const random = Math.floor(Math.random() * characters.length);
    result += String.fromCharCode(characters.charCodeAt(random));
  }

  return (inputEl.value = result);
}

function copyClipboard() {
  value = inputEl.value;
  if (value.length === 0) {
    alert('empty password');
  } else {
    let copyText = document.querySelector('#input');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    successCopyEl.classList.remove('alert-container');
    successCopyEl.classList.add('active-alert-container');
    setTimeout(() => {
      successCopyEl.classList.remove('active-alert-container');
      successCopyEl.classList.add('alert-container');
    }, 3000);
  }
}
