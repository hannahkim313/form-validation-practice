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

const displayInvalidRequirements = () => {
  const password = document.querySelector('#password').value;

  if (!/^.{8,}/.test(password)) {
    const requirement = document.querySelector('.password .min');
    const invalidDefaultIcon = requirement.firstElementChild;
    invalidDefaultIcon.replaceWith(createInvalidIcon());
  }

  if (!/^(?=.*?[a-z])/.test(password)) {
    const requirement = document.querySelector('.password .lowercase');
    const invalidDefaultIcon = requirement.firstElementChild;
    invalidDefaultIcon.replaceWith(createInvalidIcon());
  }

  if (!/^(?=.*?[A-Z])/.test(password)) {
    const requirement = document.querySelector('.password .uppercase');
    const invalidDefaultIcon = requirement.firstElementChild;
    invalidDefaultIcon.replaceWith(createInvalidIcon());
  }

  if (!/^(?=.*?[0-9])/.test(password)) {
    const requirement = document.querySelector('.password .num');
    const invalidDefaultIcon = requirement.firstElementChild;
    invalidDefaultIcon.replaceWith(createInvalidIcon());
  }
};

const showError = () => {
  const password = document.querySelector('#password');
  const passwordContainer = password.closest('div');

  if (password.validity.valueMissing) {
    const errorContainer = createErrorContainer('A password is required');
    passwordContainer.appendChild(errorContainer);
  }

  displayInvalidRequirements();
};

const createValidIcon = () => {
  const validIcon = document.createElement('img');
  validIcon.src = validImg;
  validIcon.alt = 'The input is valid';

  return validIcon;
};

const showValidRequirements = () => {
  const password = document.querySelector('#password').value;

  if (/^.{8,}/.test(password)) {
    const requirement = document.querySelector('.password .min');
    const currentIcon = requirement.firstElementChild;
    currentIcon.replaceWith(createValidIcon());
  }

  if (/^(?=.*?[a-z])/.test(password)) {
    const requirement = document.querySelector('.password .lowercase');
    const currentIcon = requirement.firstElementChild;
    currentIcon.replaceWith(createValidIcon());
  }

  if (/^(?=.*?[A-Z])/.test(password)) {
    const requirement = document.querySelector('.password .uppercase');
    const currentIcon = requirement.firstElementChild;
    currentIcon.replaceWith(createValidIcon());
  }

  if (/^(?=.*?[0-9])/.test(password)) {
    const requirement = document.querySelector('.password .num');
    const currentIcon = requirement.firstElementChild;
    currentIcon.replaceWith(createValidIcon());
  }
};

const emitInputEvents = () => {
  const password = document.querySelector('#password');
  password.removeAttribute('style');

  if (password.nextElementSibling) {
    password.nextElementSibling.remove();
  }

  if (password.validity.valid) {
    const passwordContainer = password.closest('div');
    passwordContainer.appendChild(createValidIcon());
  } else {
    showError();
  }

  showValidRequirements();
};

const events = {
  input: emitInputEvents,
};

const emitPasswordEvents = (e) => events[e.type](e);

export default emitPasswordEvents;
