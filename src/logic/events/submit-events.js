import emitInputFieldEvents from './input-field-events';

const emitClickEvents = (e) => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      e.preventDefault();
      emitInputFieldEvents(e);
    }
  });
};

const events = {
  click: emitClickEvents,
};

const emitSubmitEvents = (e) => events[e.type](e);

export default emitSubmitEvents;
