import validImg from '../../img/valid.svg';
import invalidImg from '../../img/invalid-active.svg';
import appendChildren from '../helper-functions';

const createInvalidIcon = () => {
  const invalidIcon = document.createElement('img');
  invalidIcon.src = invalidImg;
  invalidIcon.alt = 'The input is invalid';

  return invalidIcon;
};

const createErrorContainer = (errorText) => {
  const error = document.createElement('p');
  error.textContent = errorText;
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');
  appendChildren(errorContainer, createInvalidIcon(), error);

  return errorContainer;
};

const showError = () => {
  const email = document.querySelector('#email');
  const emailContainer = email.closest('div');

  if (email.validity.valueMissing) {
    const errorContainer = createErrorContainer('An email address is required');
    emailContainer.appendChild(errorContainer);
  } else if (!email.validity.valid) {
    const errorContainer = createErrorContainer(
      'Please enter a valid email address (e.g. example@gmail.com)'
    );
    emailContainer.appendChild(errorContainer);
  }
};

const emitInputEvents = () => {
  const email = document.querySelector('#email');
  email.removeAttribute('style');

  if (email.nextElementSibling) {
    email.nextElementSibling.remove();
  }

  if (email.validity.valid) {
    const validIcon = document.createElement('img');
    validIcon.src = validImg;
    validIcon.alt = 'The input is valid';
    const emailContainer = email.closest('div');
    emailContainer.appendChild(validIcon);
  } else {
    showError();
  }
};

const events = {
  input: emitInputEvents,
};

const emitEmailEvents = (e) => events[e.type](e);

export default emitEmailEvents;
