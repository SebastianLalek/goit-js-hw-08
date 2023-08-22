import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function saveInStorage() {
  const inputMail = form.elements.email.value;
  const inputMessage = form.elements.message.value;

  const feedbackFrom = {
    mail: inputMail,
    message: inputMessage,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(feedbackFrom));
}

form.addEventListener('input', throttle(saveInStorage, 500));

window.addEventListener('load', () => {
  const storedFeedback = JSON.parse(localStorage.getItem(localStorageKey));
  if (storedFeedback === null) {
    return;
  }
  form.elements.email.value = storedFeedback.mail;
  form.elements.message.value = storedFeedback.message;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  form.reset();
  localStorage.removeItem(localStorageKey);
});
