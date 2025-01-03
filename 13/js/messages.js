import { isEscape } from './utils.js';
import { closeOverlay, setErrorMessageStatus } from './user-form.js';

const Z_INDEX = 999;
const successTemplate = document.querySelector('#success');
const errorTemplate = document.querySelector('#error');

const showDataLoadError = () => {
  const existingError = document.querySelector('.data-error');
  if (existingError) {
    existingError.remove();
  }
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('data-error');
  errorMessage.textContent = 'Ошибка загрузки данных';

  Object.assign(errorMessage.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '16px',
    backgroundColor: 'red',
    padding: '20px',
    borderRadius: '5px',
    zIndex: Z_INDEX
  });

  document.body.appendChild(errorMessage);
};

const createMessage = (template, type, closeCallback) => {
  const message = template.content.cloneNode(true);
  const section = message.querySelector(type);
  const button = message.querySelector(`${type}__button`);
  document.body.appendChild(message);

  button.addEventListener('click', () => {
    section.remove();
    closeCallback();
  });

  const onEscapeKeyDown = (evt) => {
    if (isEscape(evt)) {
      section.remove();
      closeCallback();
    }
  };
  document.addEventListener('keydown', onEscapeKeyDown);

  section.addEventListener('click', (evt) => {
    if (evt.target === section) {
      section.remove();
      closeCallback();
    }
  });
};

const showSuccessMessage = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  createMessage(successTemplate, '.success', closeOverlay);
};

const showErrorMessage = () => {
  setErrorMessageStatus(true);
  createMessage(errorTemplate, '.error', () => setErrorMessageStatus(false));
};

export { showDataLoadError, showSuccessMessage, showErrorMessage };
