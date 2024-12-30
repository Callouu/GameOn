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
* @throws {Error}
*/
function validFirstName(first) {
  const formFirstName = document.querySelector(".formFirstName")
  const errorFirstName = document.querySelector(".formFirstName span")
  let nameRegex = new RegExp("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(first)) {
    formFirstName.classList.add("error")
    errorFirstName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    throw new Error()
  } else {
    formFirstName.classList.remove("error")
    errorFirstName.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format du nom
* @param {string} last : Nom de la personne
* @throws {Error}
*/
function validLastName(last) {
  const formLastName = document.querySelector(".formLastName")
  const errorLastName = document.querySelector(".formLastName span")
  let nameRegex = new RegExp ("^[a-zA-Z-]{2,}$")

  if (!nameRegex.test(last)) {
    formLastName.classList.add("error")
    errorLastName.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    throw new Error()
  } else {
    formLastName.classList.remove("error")
    errorLastName.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} email : Adresse mail de la personne
* @throws {Error}
*/
function validEmail(email) {
  const formEmail = document.querySelector(".formEmail")
  const errorEmail = document.querySelector(".formEmail span")
  let emailRegex = new RegExp ("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+")

  if (!emailRegex.test(email)) {
    formEmail.classList.add("error")
    errorEmail.textContent =  "L'email n'est pas valide"
    throw new Error()
  } else {
    formEmail.classList.remove("error")
    errorEmail.textContent = ""
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} inputDate : Date de naissance de la personne
* @throws {Error}
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
    errorBirth.textContent =  "La date n'est pas bonne"
    throw new Error()
  }
  // Définit une erreur à l'âge minimum de 16 ans
  else if (userDate > minAgeDate) {
    formBirth.classList.add("error")
    errorBirth.textContent =  "Vous devez avoir au moins 16 ans"
    throw new Error()
  }
  else {
    formBirth.classList.remove("error")
    errorBirth.textContent = ''
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} number : Nombre de participation 
* @throws {Error}
*/
function participation(number) {
  const tournament = document.querySelector(".formTournament")
  const errorTournament = document.querySelector(".formTournament span")
  let quantityRegex = new RegExp("[0-9]{1,}")
  if (!quantityRegex.test(number)) {
    tournament.classList.add("error")
    errorTournament.textContent =  "Veuillez remplir le champ"
    throw new Error()
  } else {
    tournament.classList.remove("error")
    errorTournament.textContent = ''
  }
}

/**
* Fonction qui valide si un élément est coché
* @throws {Error}
*/
function cityCheck() {
  const formLocation = document.querySelector(".formLocation")
  const errorLocation = document.getElementById("errorLocation")

  if(!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    formLocation.classList.add("error")
    errorLocation.textContent =  "Veuillez selectionner une ville"
    throw new Error()
  } else {
    formLocation.classList.remove("error")
    errorLocation.textContent =  ""
  }
}

/**
* Fonction qui valide ou non si la case est bien coché
* @param {boolean} cgu : Cocher la case obligatoire
* @throws {Error}
*/
function cguCheck(cgu) {
  const formCheck = document.querySelector(".formCheck")
  const errorCheck = document.getElementById("cgu")
  if (!cgu.checked) {
    formCheck.classList.add("error")
    errorCheck.textContent =  "Veuillez accepter les conditions d'utilisation"
    throw new Error()
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
    return true
  } else {
    return false
  }
}
/**
 * Fonction qui permet de tester si tout les champs sont valide avant de confirmer l'envoi
 * @returns {boolean} : true or false
 */
function manageForm() {
  try {
    validFirstName(firstName.value)
    validLastName(lastName.value)
    validEmail(email.value)
    birthDate(birthdate.value)
    participation(quantity.value)
    cityCheck()
    cguCheck(checkbox1)
    newsletter()
    return true
  }
  catch (erreur){
    return false
  }
}

/**
 * Fonction pour enlever le formulaire et afficher la notification d'inscription avec des propriétés CSS
 */
function confirmForm() {
  const formContent = document.querySelector(".modal-body")
  const validContent = document.querySelector(".formValid")
  const validText = document.querySelector(".formValid span")
  form.style.display = 'none'
  formContent.style.display = 'none'
  validContent.style.display = 'flex'
  validText.textContent = "Merci pour votre inscription"
}

/**
 * Fonction qui valide ou non si le formulaire est correct et affiche la notification d'inscription
 */
function validate() {
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const validForm = manageForm()
    if(validForm) {
      confirmForm()
    }
  })
}
validate()