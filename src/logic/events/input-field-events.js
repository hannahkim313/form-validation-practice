import emitEmailEvents from './email-events';
import emitZipEvents from './zip-events';
import emitPasswordEvents from './password-events';
import emitConfirmPasswordEvents from './confirm-password-events';

const emitFocusinEvents = (e) => {
  const input = e.target.closest('input');

  if (input.value === '' && !input.nextElementSibling) {
    input.style.borderColor = 'var(--color-text-1)';
  }
};

const emitFocusoutEvents = (e) => {
  const input = e.target.closest('input');
  input.removeAttribute('style');
};

const toCamelCase = (string) => {
  const words = string.split('-');
  const capitalizedWords = words
    .slice(1)
    .map((word) => word[0].toUpperCase() + word.substring(1));
  const firstWord = words.reverse().slice(words.length - 1);

  return firstWord.concat(capitalizedWords).join('');
};

const emitInputEvents = (e) => {
  const input = e.target.closest('input');
  const inputName = toCamelCase(input.getAttribute('id'));
  const inputFields = {
    email: emitEmailEvents,
    zip: emitZipEvents,
    password: emitPasswordEvents,
    confirmPassword: emitConfirmPasswordEvents,
  };
  inputFields[inputName](e);
};

const emitClickEvents = (e) => {
  if (
    e.target.closest('button') &&
    e.target.closest('button').classList.contains('submit')
  ) {
    emitEmailEvents(e);
    emitZipEvents(e);
    emitPasswordEvents(e);
    emitConfirmPasswordEvents(e);
  }
};

const events = {
  focusin: emitFocusinEvents,
  focusout: emitFocusoutEvents,
  input: emitInputEvents,
  click: emitClickEvents,
};

const emitInputFieldEvents = (e) => events[e.type](e);

export default emitInputFieldEvents;
