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
  const zip = document.querySelector('#zip');
  const zipContainer = zip.closest('div');

  if (zip.validity.valueMissing) {
    const errorContainer = createErrorContainer('A zip code is required');
    zipContainer.appendChild(errorContainer);
  } else if (zip.validity.patternMismatch) {
    const country = document.querySelector('#country').value;
    const errorTexts = {
      ch: 'Switzerland zip codes must have exactly 4 digits (e.g. CH-1950 or 1950)',
      fr: 'France zip codes must have exactly 5 digits (e.g. F-75012 or 75012)',
      us: 'United States zip codes must have exactly 5 digits (e.g. 98354)',
    };
    const errorContainer = createErrorContainer(errorTexts[country]);
    zipContainer.appendChild(errorContainer);
  }
};

const emitInputEvents = () => {
  const zip = document.querySelector('#zip');
  zip.removeAttribute('style');

  if (zip.nextElementSibling) {
    zip.nextElementSibling.remove();
  }

  if (zip.validity.valid) {
    const validIcon = document.createElement('img');
    validIcon.src = validImg;
    validIcon.alt = 'The input is valid';
    const zipContainer = zip.closest('div');
    zipContainer.appendChild(validIcon);
  } else {
    showError();
  }
};

const emitClickEvents = (e) => {
  if (
    e.target.closest('select') &&
    e.target.closest('select').getAttribute('id') === 'country'
  ) {
    emitInputEvents();
  }
};

const events = {
  input: emitInputEvents,
  click: emitClickEvents,
};

const emitZipEvents = (e) => events[e.type](e);

export default emitZipEvents;
