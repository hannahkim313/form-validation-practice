import appendChildren from '../helper-functions';
import createForm from './form';

const createContent = () => {
  const body = document.querySelector('body');
  appendChildren(body, createForm());
};

export default createContent;
