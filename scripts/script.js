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
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById("checkbox2")
const formData = document.querySelectorAll(".formData")

// Regular expressions
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

function closeModalConfirmation() {
  modalbg.style.display = "none";
  location.reload();
}


// Fermeture de la modale avec le bouton croix
closeBtn.addEventListener("click", closeModal);

// fermeture de la modale et reinitialisation du formulaire avec le bouton Fermer
closeValidBtn.addEventListener("click", closeModalConfirmation);

//Fermeture modale si le click est en dehors de la fenetre
//modalbg.addEventListener("click", (event) => {
//  if (event.target === modalbg) {
//      closeModal()
//  }
//})


// Fermeture de la modale de validation
closeValidBtn.addEventListener("click", closeModal);

/**
* Fonction qui valide ou non le format du prénom
* @param {string} first : Prénom de la personne
* @returns {boolean} : true or false
*/
function validFirstName(first) {
  const parent = document.getElementById('first').parentNode;

  if (!nameRegex.test(first)) {
    parent.setAttribute('data-error','Veuillez entrer 2 caractères ou plus');
    parent.setAttribute('data-error-visible', 'true');
    return false
  } else {
    parent.setAttribute('data-error-visible','false')
    return true
  }
}

/**
* Fonction qui valide ou non le format du nom
* @param {string} last : Nom de la personne
* @returns {boolean} : true or false
*/
function validLastName(last) {
  const parent = document.getElementById('last').parentNode;

  if (!nameRegex.test(last)) {
    parent.setAttribute('data-error','Veuillez entrer 2 caractères ou plus');
    parent.setAttribute('data-error-visible', 'true');
    return false
  } else {
    parent.setAttribute('data-error-visible','false')
    return true
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} email : Adresse mail de la personne
* @returns {boolean} : true or false
*/
function validEmail(email) {
  const parent = document.getElementById('email').parentNode;

  if (!emailRegex.test(email)) {
    parent.setAttribute('data-error','L\'email n\'est pas valide');
    parent.setAttribute('data-error-visible', 'true');
    return false
  } else {
    parent.setAttribute('data-error-visible','false')
    return true
  }
}

/**
* Fonction qui valide ou non le format de l'email
* @param {string} inputDate : Date de naissance de la personne
* @returns {boolean} : true or false
*/
function birthDate(inputDate) {
  const parent = document.getElementById('birthdate').parentNode;
  const userDate = new Date(inputDate)
  const currentDate = new Date()
  const minAgeDate = new Date()
  minAgeDate.setFullYear(minAgeDate.getFullYear() - 16)

  // Définit si le champ est vide ou si la date est dans le futur
  if (isNaN(userDate) || userDate > currentDate) {
    parent.setAttribute('data-error','Vous devez entrer votre date de naissance.');
    parent.setAttribute('data-error-visible', 'true');
    return false
  }
  // Définit une erreur à l'âge minimum de 16 ans
  else if (userDate > minAgeDate) {
    parent.setAttribute('data-error','Vous devez avoir au moins 16 ans');
    parent.setAttribute('data-error-visible', 'true');
    return false
  }
  else {
    parent.setAttribute('data-error-visible','false')
    return true
  }
}

/**
* Fonction qui valide ou non le format nombre du champ participation
* @param {string} number : Nombre de participation 
* @returns {boolean} : true or false
*/
function participation(number) {
  const parent = document.getElementById('quantity').parentNode;

  if (!quantityRegex.test(number)) {
    parent.setAttribute('data-error','Veuillez remplir le champ');
    parent.setAttribute('data-error-visible', 'true');
    return false
  } else {
    parent.setAttribute('data-error-visible','false')
    return true
  }
}

/**
* Fonction qui valide si un élément est coché
* @returns {boolean} : true or false
*/
function cityCheck() {
  const radios = document.querySelector('input[name = "location"]:checked')

  // on vérifie si un des boutons radio est coché
  if (radios == null) {
    document.querySelector('input[name="location"]').parentElement.setAttribute('data-error','Vous devez choisir une option.')
    document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');  
    return false
  } else {
    document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
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

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const validForm = manageForm()
    if(validForm) {
      confirmForm()
    }
  })
