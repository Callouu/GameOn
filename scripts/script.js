// DOM Elements
const form = document.querySelector("form")
const firstName = document.getElementById("first")
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const regexQuantity = /^([0-9]{1,2})$/;

/**
* Fonction qui valide ou non le format
* @param {string} first : Prénom
*/

function validFirstName(first) {
  let formFirstName = document.querySelector(".formFirstName")
  let errorFirstName = document.querySelector(".formFirstName span")
  let nameRegex = new RegExp("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(first)) {
    formFirstName.classList.add("error")
    errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  } else {
    formFirstName.classList.remove("error")
    errorFirstName.textContent = ""
  }
}

function validLastName(last) {
  let formLastName = document.querySelector(".formLastName")
  let errorLastName = document.querySelector(".formLastName span")
  let nameRegex = new RegExp ("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(last)) {
    formLastName.classList.add("error")
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  } else {
    formLastName.classList.remove("error")
    errorLastName.textContent = ""
  }
}

function validEmail(email) {
  let formEmail = document.querySelector(".formEmail")
  let errorEmail = document.querySelector(".formEmail span")
  let emailRegex = new RegExp ("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")

  if (!emailRegex.test(email)) {
    formEmail.classList.add("error")
    errorEmail.textContent =  "L'email n'est pas valide"
  } else {
    formEmail.classList.remove("error")
    errorEmail.textContent = ""
  }
}

function birthDate(inputDate) {
  let formBirth = document.querySelector(".birthDate")
  let errorBirth = document.querySelector(".birthDate span")
  const currentDate = new Date();
  const userDate = new Date(inputDate);

  if (isNaN(userDate) || userDate > currentDate) {
    formBirth.classList.add("error")
    errorBirth.textContent =  "La date n'est pas bonne"
    return false
  }
  formBirth.classList.remove("error")
  errorBirth.textContent = ''
    return true;
}



function validate() {
  let form = document.querySelector("form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    validFirstName(firstName.value)
    validLastName(lastName.value)
    validEmail(email.value)
    birthDate(birthdate.value)
  })
}

validate()