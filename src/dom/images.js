import asteriskImg from '../img/asterisk.svg';
import invalidDefaultImg from '../img/invalid-default.svg';
import invalidActiveImg from '../img/invalid-active.svg';
import validImg from '../img/valid.svg';

const createAsteriskIcon = () => {
  const img = document.createElement('img');
  img.src = asteriskImg;
  img.alt = 'This input is required';

  return img;
};

const createInvalidDefaultIcon = () => {
  const img = document.createElement('img');
  img.src = invalidDefaultImg;
  img.alt = 'The following criteria is required for submission';

  return img;
};

const createInvalidActiveIcon = () => {
  const img = document.createElement('img');
  img.src = invalidActiveImg;
  img.alt = 'The input is invalid';

  return img;
};

const createValidIcon = () => {
  const img = document.createElement('img');
  img.src = validImg;
  img.alt = 'The input is valid';

  return img;
};

export {
  createAsteriskIcon,
  createInvalidDefaultIcon,
  createInvalidActiveIcon,
  createValidIcon,
};
