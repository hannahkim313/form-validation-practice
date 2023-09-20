import appendChildren from '../helper-functions';
import invalidImg from '../../img/invalid-active.svg';
import validImg from '../../img/valid.svg';

const isMatch = () => {
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;
  const isEmpty = confirmPassword.length === 0;

  return !isEmpty && password === confirmPassword;
};

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
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordContainer = confirmPassword.closest('div');

  if (confirmPassword.validity.valueMissing) {
    const errorContainer = createErrorContainer('Please enter a password');
    confirmPasswordContainer.appendChild(errorContainer);
  } else if (!isMatch()) {
    const errorContainer = createErrorContainer('Passwords do not match');
    confirmPasswordContainer.appendChild(errorContainer);
  }
};

const emitInputEvents = () => {
  const confirmPassword = document.querySelector('#confirm-password');
  confirmPassword.removeAttribute('style');

  if (confirmPassword.nextElementSibling) {
    confirmPassword.nextElementSibling.remove();
  }

  if (isMatch()) {
    const validIcon = document.createElement('img');
    validIcon.src = validImg;
    validIcon.alt = 'The input is valid';
    const confirmPasswordContainer = confirmPassword.closest('div');
    confirmPasswordContainer.appendChild(validIcon);
    confirmPassword.setCustomValidity('');
  } else {
    showError();
    confirmPassword.setCustomValidity(' ');
  }
};

const events = {
  input: emitInputEvents,
};

const emitConfirmPasswordEvents = (e) => events[e.type](e);

export default emitConfirmPasswordEvents;
