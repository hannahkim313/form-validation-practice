import emitInputFieldEvents from './events/input-field-events';
import emitCountryEvents from './events/country-events';
import emitSubmitEvents from './events/submit-events';

const emitEvents = () => {
  const body = document.querySelector('body');
  body.addEventListener('focusin', (e) => {
    if (
      e.target.closest('input') &&
      e.target.closest('input').hasAttribute('required')
    ) {
      emitInputFieldEvents(e);
    }
  });

  body.addEventListener('focusout', (e) => {
    if (
      e.target.closest('input') &&
      e.target.closest('input').hasAttribute('required')
    ) {
      emitInputFieldEvents(e);
    }
  });

  body.addEventListener('input', (e) => {
    if (
      e.target.closest('input') &&
      e.target.closest('input').hasAttribute('required')
    ) {
      emitInputFieldEvents(e);
    }
  });

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('select') &&
      e.target.closest('select').getAttribute('id') === 'country'
    ) {
      emitCountryEvents(e);
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('submit')
    ) {
      emitSubmitEvents(e);
    }
  });
};

export default emitEvents;
