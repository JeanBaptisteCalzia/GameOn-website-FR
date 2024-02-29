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

  // We call the validateField function
  validateField(valueFirstname);
  validateField(valueLastname);
});
