import createForm from './form';

const createContent = () => {
  const main = document.createElement('main');
  main.appendChild(createForm());
  const body = document.querySelector('body');
  body.appendChild(main);
};

export default createContent;
