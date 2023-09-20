import emitZipEvents from './zip-events';

const setZipPattern = (country) => {
  const zipPatterns = {
    ch: '^(CH-)?\\d{4}$',
    fr: '^(F-)?\\d{5}$',
    us: '(\\d{5}([\\-]\\d{4})?)',
  };
  const zipInput = document.querySelector('#zip');
  zipInput.setAttribute('pattern', zipPatterns[country]);
};

const updateErrorText = () => {
  const errorTexts = {
    ch: 'Switzerland zip codes must have exactly 4 digits (e.g. CH-1950 or 1950)',
    fr: 'France zip codes must have exactly 5 digits (e.g. F-75012 or 75012)',
    us: 'Unites States zip codes must have exactly 5 digits (e.g. 98354)',
  };
  const country = document.querySelector('#country').value;
  const errorText = document.querySelector('.zip .error-container p');
  errorText.textContent = errorTexts[country];
};

const emitClickEvents = (e) => {
  setZipPattern(e.target.value);

  if (document.querySelector('.zip .error-container')) {
    updateErrorText();
  }

  emitZipEvents(e);
};

const events = {
  click: emitClickEvents,
};

const emitCountryEvents = (e) => events[e.type](e);

export default emitCountryEvents;
