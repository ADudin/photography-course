const form = document.querySelector('.form');
const formFields = Array.from(form.querySelectorAll('.form__field'));
const submitButton = form.querySelector('.form__submit');

const successMessage = 'Спасибо!';


// refactor is needed in case of checkbox or radio buttons appearence!
const checkInputsValue = () => {

  if (!form.reportValidity()) {
    submitButton.setAttribute('disabled', true);
  } 

  if (form.reportValidity()) {
    submitButton.removeAttribute('disabled', false);
  }
  
  formFields.forEach((field) => {
    const input = field.querySelector('.form__input');
    const placeholder = field.querySelector('.form__placeholder');
    const hiddenPlaceholder = field.querySelector('.form__placeholder_hidden');

    if (placeholder && input.value && input.type !== 'checkbox' && input.type !== 'radio') {
      placeholder.classList.add('form__placeholder_hidden');
    }

    if (hiddenPlaceholder && !input.value) {
      placeholder.classList.remove('form__placeholder_hidden');
    }
  });
};

checkInputsValue();

form.addEventListener('change', () => {
  checkInputsValue();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitButton.textContent = successMessage;
});