export const formValidation = () => {
   const contactForm = document.querySelector('#contact-form');

   function validateForm(event) {
      event.preventDefault();

      const emailValue = this['email'].value.trim();

      if (!isValidEmail(emailValue)) {
         showErrorMessage({ field: this['email'], message: "Whoops, make sure it's an email" });
      } else {
         removeErrorMessage(this['email']);
      }
   }

   function isValidEmail(email) {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      return regex.test(email);
   }

   function removeErrorMessage(fieldEmail) {
      const field = fieldEmail.parentElement;

      if (field.classList.contains('field-error')) {
         field.classList.remove('field-error');
         field.querySelector('.error').remove();
      }
   }

   function showErrorMessage({ field, message }) {
      const errorExistElement = document.querySelector('.error');
      const fieldContainer = field.parentElement;
      fieldContainer.classList.add('field-error');

      const errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = `<p class="error-message color-white">${message}</p>`;

      if (errorExistElement) {
         fieldContainer.replaceChild(errorElement, errorExistElement);
      } else {
         fieldContainer.appendChild(errorElement);
      }
   }

   contactForm.addEventListener('submit', validateForm);
}