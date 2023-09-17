import appendChildren from '../logic/helper-functions';
import { createAsteriskIcon, createInvalidDefaultIcon } from './images';

const createTitle = () => {
  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'User Registration';

  return title;
};

const createEmailContainer = () => {
  const label = document.createElement('label');
  label.for = 'email';
  label.textContent = 'Email';
  label.appendChild(createAsteriskIcon());
  const input = document.createElement('input');
  input.type = 'email';
  input.id = 'email';
  input.name = 'user-email';
  const container = document.createElement('div');
  container.classList.add('email');
  appendChildren(container, label, input);

  return container;
};

const createCountryContainer = () => {
  const label = document.createElement('label');
  label.for = 'country';
  label.textContent = 'Country';
  label.appendChild(createAsteriskIcon());
  const option1 = document.createElement('option');
  option1.value = 'ch';
  option1.textContent = 'Switzerland';
  const option2 = document.createElement('option');
  option2.value = 'fr';
  option2.textContent = 'France';
  const option3 = document.createElement('option');
  option3.value = 'us';
  option3.textContent = 'United States';
  const select = document.createElement('select');
  select.id = 'country';
  select.name = 'user-country';
  appendChildren(select, option1, option2, option3);
  const container = document.createElement('div');
  container.classList.add('country');
  appendChildren(container, label, select);

  return container;
};

const createZipContainer = () => {
  const label = document.createElement('label');
  label.for = 'zip';
  label.textContent = 'Zip Code';
  label.appendChild(createAsteriskIcon());
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'zip';
  input.name = 'user-zip';
  const container = document.createElement('div');
  container.classList.add('zip');
  appendChildren(container, label, input);

  return container;
};

const createPasswordContainer = () => {
  const label = document.createElement('label');
  label.for = 'password';
  label.textContent = 'Password';
  label.appendChild(createAsteriskIcon());
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'password';
  input.name = 'user-password';
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');
  appendChildren(inputContainer, label, input);
  const requirement1Text = document.createElement('p');
  requirement1Text.textContent = 'At least 8 characters';
  const requirement1 = document.createElement('div');
  appendChildren(requirement1, createInvalidDefaultIcon(), requirement1Text);
  const requirement2Text = document.createElement('p');
  requirement2Text.textContent = 'At least one lowercase letter';
  const requirement2 = document.createElement('div');
  appendChildren(requirement2, createInvalidDefaultIcon(), requirement2Text);
  const requirement3Text = document.createElement('p');
  requirement3Text.textContent = 'At least one uppercase letter';
  const requirement3 = document.createElement('div');
  appendChildren(requirement3, createInvalidDefaultIcon(), requirement3Text);
  const requirement4Text = document.createElement('p');
  requirement4Text.textContent = 'At least one number';
  const requirement4 = document.createElement('div');
  appendChildren(requirement4, createInvalidDefaultIcon(), requirement4Text);
  const requirementContainer = document.createElement('div');
  requirementContainer.classList.add('requirement-container');
  appendChildren(
    requirementContainer,
    requirement1,
    requirement2,
    requirement3,
    requirement4
  );
  const container = document.createElement('div');
  container.classList.add('password');
  appendChildren(container, inputContainer, requirementContainer);

  return container;
};

const createConfirmPasswordContainer = () => {
  const label = document.createElement('label');
  label.for = 'confirm-password';
  label.textContent = 'Confirm Password';
  label.appendChild(createAsteriskIcon());
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'confirm-password';
  input.name = 'user-confirm-password';
  const container = document.createElement('div');
  container.classList.add('confirm-password');
  appendChildren(container, label, input);

  return container;
};

const createSubmitBtn = () => {
  const btn = document.createElement('button');
  btn.classList.add('submit');
  btn.type = 'submit';
  btn.textContent = 'Submit';

  return btn;
};

const createForm = () => {
  const form = document.createElement('form');
  form.action = '';
  form.method = 'get';
  form.setAttribute('novalidate', '');
  appendChildren(
    form,
    createTitle(),
    createEmailContainer(),
    createCountryContainer(),
    createZipContainer(),
    createPasswordContainer(),
    createConfirmPasswordContainer(),
    createSubmitBtn()
  );

  return form;
};

export default createForm;
