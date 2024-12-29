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
* Fonction qui valide ou non le format du prénom
* @param {string} first : Prénom de la personne
*/
function validFirstName(first) {
  const formFirstName = document.querySelector(".formFirstName")
  const errorFirstName = document.querySelector(".formFirstName span")
  let nameRegex = new RegExp("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(first)) {
    formFirstName.classList.add("error")
    errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  } else {
    formFirstName.classList.remove("error")
    errorFirstName.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format du nom
* @param {string} last : Nom de la personne
*/
function validLastName(last) {
  const formLastName = document.querySelector(".formLastName")
  const errorLastName = document.querySelector(".formLastName span")
  let nameRegex = new RegExp ("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(last)) {
    formLastName.classList.add("error")
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  } else {
    formLastName.classList.remove("error")
    errorLastName.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} email : Adresse mail de la personne
*/
function validEmail(email) {
  const formEmail = document.querySelector(".formEmail")
  const errorEmail = document.querySelector(".formEmail span")
  let emailRegex = new RegExp ("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")

  if (!emailRegex.test(email)) {
    formEmail.classList.add("error")
    errorEmail.textContent =  "L'email n'est pas valide"
  } else {
    formEmail.classList.remove("error")
    errorEmail.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} inputDate : Date de naissance de la personne
*/
function birthDate(inputDate) {
  const formBirth = document.querySelector(".birthDate")
  const errorBirth = document.querySelector(".birthDate span")
  const userDate = new Date(inputDate)
  const currentDate = new Date()
  //const minAgeDate = new Date()
  //minAgeDate.setFullYear(minAgeDate.getFullYear() - 16)

  if (isNaN(userDate) || userDate > currentDate) {
    formBirth.classList.add("error")
    errorBirth.textContent =  "La date n'est pas bonne"
  }
  else {
    formBirth.classList.remove("error")
    errorBirth.textContent = ''
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} number : Nombre de participation 
*/
function participation(number) {
  const tournament = document.querySelector(".formTournament")
  const errorTournament = document.querySelector(".formTournament span")
  let numberRegex = new RegExp("[0-9]{1,}")
  if (!numberRegex.test(number)) {
    tournament.classList.add("error")
    errorTournament.textContent =  "Veuillez remplir le champ"
  } else {
    tournament.classList.remove("error")
    errorTournament.textContent = ''
  }
}


function validate() {

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    validFirstName(firstName.value)
    validLastName(lastName.value)
    validEmail(email.value)
    birthDate(birthdate.value)
    participation(quantity.value)
  })
}

validate()