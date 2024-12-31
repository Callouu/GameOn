// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const closeValidBtn = document.querySelector(".formValid input")
const form = document.querySelector("form")
const firstName = document.getElementById("first")
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const quantity = document.getElementById('quantity')
const birthdate = document.getElementById('birthdate')
const locations = document.querySelectorAll('#allLocations .checkbox-input')
const radios = document.querySelectorAll('input[name = "location"]')  
const loc1 = document.getElementById("location1")
const loc2 = document.getElementById("location2")
const loc3 = document.getElementById("location3")
const loc4 = document.getElementById("location4")
const loc5 = document.getElementById("location5")
const loc6 = document.getElementById("location6")
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById("checkbox2")
const formData = document.querySelectorAll(".formData")
const nameRegex = new RegExp("^[a-zA-Z-]{2,}$")
const emailRegex = new RegExp ("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+")
const quantityRegex = new RegExp("[0-9]{1,}")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"; 
}

// close modal event
closeBtn.addEventListener("click", closeModal);

modalbg.addEventListener("click", (event) => {
  if (event.target === modalbg) {
      closeModal()
  }
})

// close modal validation
closeValidBtn.addEventListener("click", closeModal);

/**
* Fonction qui valide ou non le format du prénom
* @param {string} first : Prénom de la personne
* @returns {boolean} : true or false
*/
function validFirstName(first) {
  const formFirstName = document.querySelector(".formFirstName")
  const errorFirstName = document.querySelector(".formFirstName span")

  if (!nameRegex.test(first)) {
    formFirstName.classList.add("error")
    errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    return false
  } else {
    formFirstName.classList.remove("error")
    errorFirstName.textContent = ""
    return true
  }
}

/**
* Fonction qui valide ou non le format du nom
* @param {string} last : Nom de la personne
* @returns {boolean} : true or false
*/
function validLastName(last) {
  const formLastName = document.querySelector(".formLastName")
  const errorLastName = document.querySelector(".formLastName span")

  if (!nameRegex.test(last)) {
    formLastName.classList.add("error")
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    return false
  } else {
    formLastName.classList.remove("error")
    errorLastName.textContent = ""
    return true
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} email : Adresse mail de la personne
* @returns {boolean} : true or false
*/
function validEmail(email) {
  const formEmail = document.querySelector(".formEmail")
  const errorEmail = document.querySelector(".formEmail span")

  if (!emailRegex.test(email)) {
    formEmail.classList.add("error")
    errorEmail.textContent =  "L'email n'est pas valide"
    return false
  } else {
    formEmail.classList.remove("error")
    errorEmail.textContent = ""
    return true
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} inputDate : Date de naissance de la personne
* @returns {boolean} : true or false
*/
function birthDate(inputDate) {
  const formBirth = document.querySelector(".birthDate")
  const errorBirth = document.querySelector(".birthDate span")
  const userDate = new Date(inputDate)
  const currentDate = new Date()
  const minAgeDate = new Date()
  minAgeDate.setFullYear(minAgeDate.getFullYear() - 16)

  // Définit si le champ est vide ou si la date est dans le futur
  if (isNaN(userDate) || userDate > currentDate) {
    formBirth.classList.add("error")
    errorBirth.textContent =  "Vous devez entrer votre date de naissance."
    return false
  }
  // Définit une erreur à l'âge minimum de 16 ans
  else if (userDate > minAgeDate) {
    formBirth.classList.add("error")
    errorBirth.textContent =  "Vous devez avoir au moins 16 ans"
    return false
  }
  else {
    formBirth.classList.remove("error")
    errorBirth.textContent = ''
    return true
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} number : Nombre de participation 
* @returns {boolean} : true or false
*/
function participation(number) {
  const tournament = document.querySelector(".formTournament")
  const errorTournament = document.querySelector(".formTournament span")

  if (!quantityRegex.test(number)) {
    tournament.classList.add("error")
    errorTournament.textContent =  "Veuillez remplir le champ"
    return false
  } else {
    tournament.classList.remove("error")
    errorTournament.textContent = ''
    return true
  }
}

/**
* Fonction qui valide si un élément est coché
* @returns {boolean} : true or false
*/
function cityCheck() {
  const errorLocation = document.getElementById("errorLocation")

  if(!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    errorLocation.textContent =  "Vous devez choisir une option."
    return false
  } else {
    errorLocation.textContent =  ""
    return true
  }
}

/**
* Fonction qui valide ou non si la case est bien coché
* @param {boolean} cgu : Cocher la case obligatoire
* @returns {boolean} : true or false
*/
function cguCheck(cgu) {
  const errorCheck = document.getElementById("cgu")
  if (!cgu.checked) {
    errorCheck.textContent =  "Vous devez vérifier que vous acceptez les termes et conditions."
    return false
  } else {
    errorCheck.textContent =  ""
    return true
  }
}

/**
 * Fonction pour récupérer la valeur true ou false de la #checkbox 2
 * @param {boolean} checkbox2 : la case est coché ou non
 * @returns {boolean} : true or false
 */
function newsletter() {
  if (checkbox2.checked){
    return true
  } else {
    return false
  }
}

// Fonction qui permet d'afficher tout les messages d'erreur en même temps
function showError() {
  validFirstName(firstName.value)
  validLastName(lastName.value)
  validEmail(email.value)
  birthDate(birthdate.value)
  participation(quantity.value)
  cityCheck()
  cguCheck(checkbox1)
}

/**
 * Fonction qui permet de tester si tout les champs sont valide avant de confirmer l'envoi
 * @returns {boolean} : true or false
 */
function manageForm() {
  if (
  validFirstName(firstName.value) &&
  validLastName(lastName.value) &&
  validEmail(email.value) &&
  birthDate(birthdate.value) &&
  participation(quantity.value) &&
  cityCheck() &&
  cguCheck(checkbox1)
  ) {
    return true
  } else {
    showError()
    return false
  }
}

// Fonction pour enlever le formulaire et afficher la notification d'inscription avec des propriétés CSS
function confirmForm() {
  const formContent = document.querySelector(".modal-body")
  const validContent = document.querySelector(".formValid")
  const validText = document.querySelector(".formValid span")
  form.style.display = 'none'
  formContent.style.display = 'none'
  validContent.style.display = 'flex'
  validText.textContent = "Merci pour votre inscription"
}

// Fonction qui valide ou non si le formulaire est correct et affiche la notification d'inscription
function validate() {
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const validForm = manageForm()
    if(validForm) {
      confirmForm()
    }
  })
}

// Lancement de la fonction
validate()