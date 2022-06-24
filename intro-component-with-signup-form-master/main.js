//                -=-=-=-= DOM Elements =-=-=-=-

const formElement = document.getElementById("main-form");
const formFieldElements = document.getElementsByClassName(".form-field");

const inputNameElement = document.getElementById("name");
const inputSurnameElement = document.getElementById("surname");
const inputEmailElement = document.getElementById("email");
const inputPasswordElement = document.getElementById("password");

const warningMessageElement = document.getElementsByClassName("warning-msg");
const warningIconElement = document.getElementsByClassName("warning-icon");
const warningIconFirstElement = document.querySelector(".first");
const generalMessageElement = document.getElementById('message');

const submitBtnElement = document.getElementById("submit-btn");

const mailFormat =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//                   -=-=-=-= Functions =-=-=-=-

// This validates the Name field

const validateNameField = () => {
  if (inputNameElement.value === "") {
    inputNameElement.style.border = "2px solid var(--custom-red)";
    inputNameElement.nextElementSibling.textContent =
      "First Name cannot be empty";
    inputNameElement.nextElementSibling.style.display = "block";
    warningIconFirstElement.style.display = "block";
    return false;
  } else {
    inputNameElement.style.border = "1px solid lightgray";
    inputNameElement.nextElementSibling.textContent = "";
    inputNameElement.nextElementSibling.style.display = "none";
    warningIconFirstElement.style.display = "none";
    return true;
  }
};

// This validates the Surname field

const validateSurnameField = () => {
  if (inputSurnameElement.value === "") {
    inputSurnameElement.style.border = "2px solid var(--custom-red)";
    inputSurnameElement.nextElementSibling.textContent =
      "Last Name cannot be empty";
    inputSurnameElement.nextElementSibling.style.display = "block";
    inputSurnameElement.nextElementSibling.nextElementSibling.style.display =
      "block";
    return false;
  } else {
    inputSurnameElement.style.border = "1px solid lightgray";
    inputSurnameElement.nextElementSibling.textContent = "";
    inputSurnameElement.nextElementSibling.style.display = "none";
    inputSurnameElement.nextElementSibling.nextElementSibling.style.display =
      "none";
    return true;
  }
};

// This validates the Email field

const validateEmailField = () => {
  if (inputEmailElement.value === "") {
    inputEmailElement.style.border = "2px solid var(--custom-red)";
    inputEmailElement.nextElementSibling.textContent = "Email cannot be empty";
    inputEmailElement.nextElementSibling.style.display = "block";
    inputEmailElement.nextElementSibling.nextElementSibling.style.display =
      "block";
    return false;
  } else if (!inputEmailElement.value.match(mailFormat)) {
    inputEmailElement.style.border = "2px solid var(--custom-red)";
    inputEmailElement.nextElementSibling.textContent =
      "Looks like this is not an email!";
    inputEmailElement.nextElementSibling.style.display = "block";
    inputEmailElement.nextElementSibling.nextElementSibling.style.display =
      "block";
    return false;
  } else {
    inputEmailElement.style.border = "1px solid lightgray";
    inputEmailElement.nextElementSibling.textContent = "";
    inputEmailElement.nextElementSibling.style.display = "none";
    inputEmailElement.nextElementSibling.nextElementSibling.style.display =
      "none";
    return true;
  }
};

// This validates the Password field

const validatePasswordField = () => {
  if (inputPasswordElement.value === "") {
    inputPasswordElement.style.border = "2px solid var(--custom-red)";
    inputPasswordElement.nextElementSibling.textContent =
      "Password cannot be empty";
    inputPasswordElement.nextElementSibling.style.display = "block";
    inputPasswordElement.nextElementSibling.nextElementSibling.style.display =
      "block";
    return false;
  } else {
    inputPasswordElement.style.border = "1px solid lightgray";
    inputPasswordElement.nextElementSibling.textContent = "";
    inputPasswordElement.nextElementSibling.style.display = "none";
    inputPasswordElement.nextElementSibling.nextElementSibling.style.display =
      "none";
    return true;
  }
};

// This puts it all together

let formValidation = () => {
  validateNameField();
  validateSurnameField();
  validateEmailField();
  validatePasswordField();
};

// Event Listeners

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();

  if (
    validateNameField() &&
    validateSurnameField() &&
    validateEmailField() &&
    validatePasswordField()
  ) {
    generalMessageElement.textContent = "Form submitted!"
    generalMessageElement.parentElement.style.backgroundColor = "var(--custom-green)"
    console.log("Form submitted!");

  } else {
    generalMessageElement.textContent = "Form not submitted!"
    generalMessageElement.parentElement.style.backgroundColor = "orange"
    console.log("Form not submitted!");
  }
});
