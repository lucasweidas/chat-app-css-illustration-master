const appChat = document.querySelector('.app-chat');
const appForm = document.querySelector('.app-form');
const formTxt = document.querySelector('#app-form__txt');

function verifySubmit(evt) {
  evt.preventDefault();
  const txtValue = formTxt.value;

  if (txtValue.trim().length === 0) return appForm.classList.add('error');

  appForm.classList.remove('error');
  addNewMessage(txtValue);
}

function addNewMessage(txtValue) {
  const p = document.createElement('p');
  const lastChild = appChat.lastElementChild;

  if (lastChild.classList.contains('friend')) {
    lastChild.style.marginBlockEnd = '0.5rem';
  }
  
  p.classList.add('user', 'message');
  p.innerText = txtValue;
  appChat.appendChild(p);
  formTxt.value = '';
}

appForm.addEventListener('submit', verifySubmit);
