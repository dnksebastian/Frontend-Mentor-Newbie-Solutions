const errorMessage = document.querySelector('.error-hidden');
const inputElement = document.querySelector("input");



inputElement.addEventListener("invalid", function (event) {
  event.preventDefault();
  errorMessage.classList.add('show-error');
});
