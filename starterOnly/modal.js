function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const modalContent = document.querySelector(".content");
const form = document.querySelector("form");
const modalInsideCloseBtn = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
document.addEventListener("click", (event) => {
  const isOutside = event.target;
  if (isOutside === modalbg || isOutside === modalCloseBtn) {
    closeModal();
  }
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Verify if fields has a minimum of 2 characters or are not empty
function validateField(name, zone, label) {
  // Define variable with text to display if an error happens
  let contentSpanFirst =
    "Veuillez entrer 2 caractères ou plus pour le champ du " + label + ".";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Retrieve First element
  let elements = document.getElementById(zone);
  // Add text inside new element : span
  newElement.textContent = contentSpanFirst;

  if (name.length < 2) {
    // Add new element to Last parent element
    elements.parentNode.appendChild(newElement);
  }
  return true;
}

// Verify if an email match the RegExp pattern
function validateEmail(email) {
  let emailRegExp = new RegExp(
    "[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\\.[a-zA-Z]{2,3}"
  );

  // Define variable with text to display if an error happens
  let contentSpanEmail = "Vous devez entrer un email valide.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanEmail;

  if (!emailRegExp.test(email)) {
    // Retrieve Email element
    let emailElement = document.getElementById("email");
    // Add new element to Last parent element
    emailElement.parentNode.appendChild(newElement);
    // throw new Error("L'email n'est pas valide.");
  }
  return true;
}

// Verify if Number input is a number
function validateNumber(n) {
  // Define variable with text to display if an error happens
  let contentSpanNumber = "Vous devez choisir un nombre.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanNumber;

  if (isNaN(n) || n === "") {
    // Retrieve Number element
    let NumberElement = document.getElementById("quantity");
    // Add new element to Last parent element
    NumberElement.parentNode.appendChild(newElement);
  }

  if (n < 0) {
    // Define variable with text to display if an error happens
    let contentSpanNegativeNumber = "Vous devez choisir un nombre valide";
    // Add text inside new element : span
    newElement.textContent = contentSpanNegativeNumber;
    // Retrieve Number element
    let NumberElement = document.getElementById("quantity");
    // Add new element to Last parent element
    NumberElement.parentNode.appendChild(newElement);
  }
  return true;
}

// Verify if a radio input is checked
function validateRadio(radioList) {
  // Define variable with text to display if an error happens
  let contentSpanRadio = "Vous devez choisir une option.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanRadio;
  // Retrieve Last Radio element
  let radioElement = document.getElementById("location6");

  let radioValid = false;

  for (let i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      radioValid = true;
    }
  }

  if (radioValid === false) {
    // Add new element to Last parent element
    radioElement.parentNode.appendChild(newElement);
    radioValid = false;
  }
  return true;
}

// Verify if checkbox 1 is checked
function validateCheckbox1(checkbox) {
  // Define variable with text to display if an error happens
  let contentSpanCheckbox =
    "Vous devez vérifier que vous acceptez les termes et conditions.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanCheckbox;

  if (!checkbox.checked) {
    // Retrieve Last CheckBox element
    let CheckboxElement = document.getElementById("checkbox1");
    // Add new element to Last parent element
    CheckboxElement.parentNode.appendChild(newElement);
    return false;
  }
  return true;
}

// Verify if date is empty
function validateDate(date) {
  // Define variable with text to display if an error happens
  let contentSpanDate = "Vous devez entrer votre date de naissance.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Define variable with text to display if an error happens in the future
  let contentSpanDateFuture = "Vous devez entrer une date de naissance valide.";
  // Add text inside new element : span
  newElement.textContent = contentSpanDate;

  // The date you want to check
  const inputDate = document.getElementById("birthdate").value;
  const dateEntered = new Date(inputDate);
  // Get the current date
  const currentDate = new Date();

  // Compare the input date with the current date
  if (dateEntered >= currentDate) {
    // Add text inside new element : span future
    newElement.textContent = contentSpanDateFuture;
    // Retrieve Date element
    let DateElement = document.getElementById("birthdate");
    // Add new element to Last parent element
    DateElement.parentNode.appendChild(newElement);
  }

  if (!date) {
    // Retrieve Date element
    let DateElement = document.getElementById("birthdate");
    // Add new element to Last parent element
    DateElement.parentNode.appendChild(newElement);
  }
  return true;
}

// When we submit the form
form.addEventListener("submit", (event) => {
  // We prevent the default behavior
  event.preventDefault();

  // We retrieve Error messages
  const errorMessage = document.getElementsByClassName("error-message");

  // We delete error messages
  for (const [key, message] of Object.entries(errorMessage)) {
    message.remove(errorMessage);
  }

  // We retrieve Firstname value
  const firstname = document.getElementById("first");
  const valueFirstname = firstname.value;

  // We retrieve Lastname value
  const lastname = document.getElementById("last");
  const valueLastname = lastname.value;

  // We retrieve Email value
  const email = document.getElementById("email");
  const valueEmail = email.value;

  // We retrieve Number value
  const quantity = document.getElementById("quantity");
  const valueQuantity = quantity.value;

  // We retrieve Radio btn
  const radioList = document.querySelectorAll(
    ".formData input[name='location']"
  );

  // We retrieve Checkbox 1 id
  const checkbox1 = document.getElementById("checkbox1");

  // We retrieve Date id
  const date = document.getElementById("birthdate");
  const valueDate = date.value;

  if (
    // We call the validate functions
    validateField(valueFirstname, "first", "prénom") &&
    validateField(valueLastname, "last", "nom") &&
    validateEmail(valueEmail) &&
    validateDate(valueDate) &&
    validateNumber(valueQuantity) &&
    validateRadio(radioList) &&
    validateCheckbox1(checkbox1)
  ) {
    // Define variables with text to display when form is validate
    const contentSuccessMessage = "Merci pour votre inscription !";
    const contentSuccessBtn = "Fermer";
    // Create h1 and btn
    const newElement = document.createElement("h1");
    const newBtn = document.createElement("button");
    // Retrieve form content
    const modalFormBody = document.querySelector("form");
    const modalBody = document.querySelector(".modal-body");

    // Add text inside new element (h1) and new button
    newElement.textContent = contentSuccessMessage;
    newBtn.textContent = contentSuccessBtn;
    newBtn.setAttribute("class", "btn-close");
    modalBody.setAttribute("class", "modal-body modal-body--open");
    modalBody.setAttribute("onclick", "window.location.reload();");
    // Remove form elements
    modalFormBody.remove(modalFormBody);
    // Add new element to modal content
    modalBody.appendChild(newElement);
    modalBody.appendChild(newBtn);

    console.log(valueFirstname);
    console.log(valueLastname);
    console.log(valueEmail);
    console.log(valueDate);
    console.log(valueQuantity);
    console.log(radioList);
    console.log(checkbox1);
    console.log("Sucess");
  } else {
    console.log("Form contains error");
  }
});
