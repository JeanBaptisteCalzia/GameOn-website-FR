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
function validateField(name) {
  if (name.length >= 2) {
    console.log("True");
    return true;
  }
  console.log("False");
  return false;
}

// Verify if an email match the RegExp pattern
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide.");
  }
  console.log("Is an email");
}

// Verify if Number input is a number
function validateNumber(n) {
  if (isNaN(n) || n === "") {
    console.log("Is not a number");
    return false;
  }
  console.log("Is a number");
  return false;
}

// Verify if a radio input is checked
function validateRadio(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      console.log("One radio is checked");
      break;
    } else {
      console.log("Radio is not checked");
    }

    console.log(radioList.value);
  }
}

// Verify if checkbox 1 is checked
function validateCheckbox1(checkbox) {
  if (checkbox.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is Unchecked");
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

  // We call the validate functions
  validateField(valueFirstname);
  validateField(valueLastname);
  validateEmail(valueEmail);
  validateNumber(valueQuantity);
  validateRadio(radioList);
  validateCheckbox1(checkbox1);
});
