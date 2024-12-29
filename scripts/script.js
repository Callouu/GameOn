// DOM Elements
const form = document.querySelector("form")
const firstName = document.getElementById("first")
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const quantity = document.getElementById('quantity')
const birthdate = document.getElementById('birthdate')
const locations = document.querySelectorAll('#allLocations .checkbox-input')
//const radioBtnLocation = document.querySelectorAll('.formLocation input[type="radio"]')
const radios = document.querySelectorAll('input[name = "location"]')  
const loc1 = document.getElementById("location1")
const loc2 = document.getElementById("location2")
const loc3 = document.getElementById("location3")
const loc4 = document.getElementById("location4")
const loc5 = document.getElementById("location5")
const loc6 = document.getElementById("location6")
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById("checkbox2")

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
  let quantityRegex = new RegExp("[0-9]{1,}")
  if (!quantityRegex.test(number)) {
    tournament.classList.add("error")
    errorTournament.textContent =  "Veuillez remplir le champ"
  } else {
    tournament.classList.remove("error")
    errorTournament.textContent = ''
  }
}

/**function initAddEventListenerButton() { 
  radios.forEach(button => {
    button.addEventListener('change', () => {                            
    });
  })
} 
*/

/**
* Fonction qui valide si un élément est coché
*/
function cityCheck() {
  const formLocation = document.querySelector(".formLocation")
  const errorLocation = document.getElementById("errorLocation")

  if(!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    formLocation.classList.add("error")
    errorLocation.textContent =  "Veuillez selectionner une ville"
  } else {
    formLocation.classList.remove("error")
    errorLocation.textContent =  ""
  }
}

/**
* Fonction qui valide ou non si la case est bien coché
* @param {boolean} cgu : Cocher la case obligatoire
*/
function cguCheck(cgu) {
  const formCheck = document.querySelector(".formCheck")
  const errorCheck = document.getElementById("cgu")
  if (!cgu.checked) {
    formCheck.classList.add("error")
    errorCheck.textContent =  "Veuillez accepter les conditions d'utilisation"
  } else {
    formCheck.classList.remove("error")
    errorCheck.textContent =  ""
  }
}

/**
 * Fonction pour récupérer la valeur true ou false de la #checkbox 2
 * @param {boolean} checkbox2 : la case est coché ou non
 * @returns {boolean} : true or false
 */
function newsletter() {
  if (checkbox2.checked){
    console.log("coché")
    return true
  } else {
    console.log("pas coché")
    return false
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
    cityCheck()
    cguCheck(checkbox1)
    newsletter()
  })
}

validate()