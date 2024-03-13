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
  if (name.length < 2) {
    // Define variable with text to display if an error happens
    const contentSpanFirst =
      "Veuillez entrer 2 caractères ou plus pour le champ du " + label + ".";
    // Create a span with error-message class
    const newElement = document.createElement("span");
    newElement.setAttribute("class", "error-message");
    // Retrieve First or Last element
    const elements = document.getElementById(zone);
    // Add text inside new element : span
    newElement.textContent = contentSpanFirst;
    // Add new elements
    elements.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    elements.parentNode.setAttribute("class", "formData error-message");
    return false;
  }
  return true;
}

// Verify if an email match the RegExp pattern
function validateEmail(email) {
  // prettier-ignore
  const emailRegExp = new RegExp(
    /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
  );

  if (!emailRegExp.test(email)) {
    // Define variable with text to display if an error happens
    const contentSpanEmail = "Vous devez entrer un email valide.";
    // Create a span with error-message class
    const newElement = document.createElement("span");
    newElement.setAttribute("class", "error-message");
    // Add text inside new element : span
    newElement.textContent = contentSpanEmail;
    // Retrieve Email element
    const emailElement = document.getElementById("email");
    // Add new element
    emailElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    emailElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }
  return true;
}

// Verify if date is empty
function validateDate(date) {
  // Define variable with text to display if an error happens
  const contentSpanDate = "Vous devez entrer votre date de naissance.";
  // Create a span with error-message class
  const newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Define variable with text to display if an error happens in the future
  const contentSpanDateFuture =
    "Vous devez entrer une date de naissance valide.";
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
    const DateElement = document.getElementById("birthdate");
    // Add new element
    DateElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    DateElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }

  if (!date) {
    // Retrieve Date element
    const DateElement = document.getElementById("birthdate");
    // Add new element
    DateElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    DateElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }
  return true;
}

// Verify if Number input is a number
function validateNumber(n) {
  // Define variable with text to display if an error happens
  const contentSpanNumber = "Vous devez choisir un nombre.";
  // Create a span with error-message class
  const newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanNumber;

  if (isNaN(n) || n === "") {
    // Retrieve Number element
    const NumberElement = document.getElementById("quantity");
    // Add new element
    NumberElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    NumberElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }

  if (n < 0) {
    // Define variable with text to display if an error happens
    const contentSpanNegativeNumber = "Vous devez choisir un nombre valide";
    // Add text inside new element : span
    newElement.textContent = contentSpanNegativeNumber;
    // Retrieve Number element
    const NumberElement = document.getElementById("quantity");
    // Add new element
    NumberElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    NumberElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }
  return true;
}

// Verify if a radio input is checked
function validateRadio(radioList) {
  let radioValid = false;

  for (let i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      radioValid = true;
    }
  }

  if (radioValid === false) {
    // Define variable with text to display if an error happens
    const contentSpanRadio = "Vous devez choisir une option.";
    // Create a span with error-message class
    const newElement = document.createElement("span");
    newElement.setAttribute("class", "error-message");
    // Add text inside new element : span
    newElement.textContent = contentSpanRadio;
    // Retrieve Last Radio element
    const radioElement = document.getElementById("location6");
    // Add new element
    radioElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    radioElement.parentNode.setAttribute("class", "formData error-message");
    radioValid = false;
    return false;
  }
  return true;
}

// Verify if checkbox 1 is checked
function validateCheckbox1(checkbox) {
  if (!checkbox.checked) {
    // Define variable with text to display if an error happens
    const contentSpanCheckbox =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    // Create a span with error-message class
    const newElement = document.createElement("span");
    newElement.setAttribute("class", "error-message");
    // Add text inside new element : span
    newElement.textContent = contentSpanCheckbox;
    // Retrieve Last CheckBox element
    const CheckboxElement = document.getElementById("checkbox1");
    // Add new element
    CheckboxElement.parentNode.appendChild(newElement);
    // Add new error-message class to parent element
    CheckboxElement.parentNode.setAttribute("class", "formData error-message");
    return false;
  }
  return true;
}

// When we submit the form
function validate(event) {
  // We prevent the default behavior
  event.preventDefault();

  // We retrieve Error messages
  const errorMessage = document.querySelectorAll("span.error-message");

  // We delete error messages (span)
  for (const [key, message] of Object.entries(errorMessage)) {
    message.remove(errorMessage);
  }

  // We delete error messages classes of FormData elements
  for (const [key, classError] of Object.entries(formData)) {
    classError.setAttribute("class", "formData");
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

  // We retrieve Checkbox1 id
  const checkbox1 = document.getElementById("checkbox1");

  // We retrieve Date value
  const date = document.getElementById("birthdate");
  const valueDate = date.value;

  // We call the validate functions
  const validFirst = validateField(valueFirstname, "first", "prénom");
  const validLast = validateField(valueLastname, "last", "nom");
  const validEmail = validateEmail(valueEmail);
  const validDate = validateDate(valueDate);
  const validQuantity = validateNumber(valueQuantity);
  const validRadiolist = validateRadio(radioList);
  const validChecbox = validateCheckbox1(checkbox1);

  if (
    validFirst === true &&
    validLast === true &&
    validEmail === true &&
    validDate === true &&
    validQuantity === true &&
    validRadiolist === true &&
    validChecbox === true
  ) {
    // Define variables with text to display when form is validate
    const contentSuccessMessage = "Merci pour<br>votre inscription !";
    const contentSuccessBtn = "Fermer";
    // Create h1 and btn
    const newElement = document.createElement("h1");
    const newBtn = document.createElement("button");
    // Retrieve form content
    const modalFormBody = document.querySelector("form");
    const modalBody = document.querySelector(".modal-body");

    // Add text inside new element (h1) and new button
    newElement.innerHTML = contentSuccessMessage;
    newBtn.textContent = contentSuccessBtn;
    // Set attribute on Btn and modal
    newBtn.setAttribute("class", "btn-close");
    modalBody.setAttribute("class", "modal-body modal-body--open");
    // Set attribute on Success Modal Btn in order to reload page on click
    modalBody.setAttribute("onclick", "location.reload(true);");
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
}

form.onsubmit = validate;
