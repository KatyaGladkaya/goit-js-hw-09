const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
form.addEventListener('input', ev => {
  const { name, value } = ev.target;

  if (name === 'email') {
    formData.email = value.trim();
  } else if (name === 'message') {
    formData.message = value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageInput.value = '';
});

console.log(localStorage.getItem('feedback-form-state'));
