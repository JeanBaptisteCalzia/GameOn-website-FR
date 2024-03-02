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
modalCloseBtn.addEventListener("click", () => {
  closeModal();
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
  let FirstElement = document.getElementById("first");
  // Retrieve Last element
  let LastElement = document.getElementById("last");
  // Retrieve Span element
  let spanElement = document.getElementsByClassName("error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanFirst;

  if (name.length < 2) {
    switch (zone) {
      case "first":
        // Add new element to First parent element
        FirstElement.parentNode.appendChild(newElement);
        break;
      case "last":
        // Add new element to Last parent element
        LastElement.parentNode.appendChild(newElement);
        break;
      default:
        return true;
    }
  }

  console.log("Plus de 2 lettres");
  return true;
}

// Verify if an email match the RegExp pattern
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

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
  console.log("Is an email");
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
    console.log("Is not a number");
    // Retrieve Number element
    let NumberElement = document.getElementById("quantity");
    // Add new element to Last parent element
    NumberElement.parentNode.appendChild(newElement);
  }
  console.log("Is a number");
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
    return radioValid;
  }
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

  if (checkbox.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is Unchecked");
    // Retrieve Last CheckBox element
    let CheckboxElement = document.getElementById("checkbox1");
    // Add new element to Last parent element
    CheckboxElement.parentNode.appendChild(newElement);
  }
}

// Verify if date is empty
function validateDate(date) {
  // Define variable with text to display if an error happens
  let contentSpanDate = "Vous devez entrer votre date de naissance.";
  // Create a span
  let newElement = document.createElement("span");
  newElement.setAttribute("class", "error-message");
  // Add text inside new element : span
  newElement.textContent = contentSpanDate;
  if (!date) {
    console.log("empty");
    // Retrieve Date element
    let DateElement = document.getElementById("birthdate");
    // Add new element to Last parent element
    DateElement.parentNode.appendChild(newElement);
  }
}

// When we submit the form
form.addEventListener("submit", (event) => {
  // We prevent the default behavior
  event.preventDefault();

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

  // We call the validate functions
  validateField(valueFirstname, "first", "prénom");
  validateField(valueLastname, "last", "nom");
  validateEmail(valueEmail);
  validateNumber(valueQuantity);
  validateRadio(radioList);
  validateCheckbox1(checkbox1);
  validateDate(valueDate);
});
