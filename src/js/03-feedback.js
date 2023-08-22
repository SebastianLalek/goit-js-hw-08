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

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem(JSON.parse(localStorageKey)));
  form.reset();
  localStorage.removeItem(localStorageKey);
});

window.addEventListener('load', () => {
  try {
    const storedFeedback = JSON.parse(localStorage.getItem(localStorageKey));
    form.elements.email.value = storedFeedback.mail;
    form.elements.message.value = storedFeedback.message;
    return;
  } catch (error) {
    console.log(error.message);
  }
});
