// variables Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const badgrclose = document.querySelector(".btn-fermer");
const form = document.querySelector("#inscription");
const modalConf = document.querySelector(".modal_confirmation");
const btnSUbt = document.querySelector(".btn-submit");
const fermer = document.querySelector(".close");
const close = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", ferme));
fermer.addEventListener("click", ferme);
badgrclose.addEventListener("click", ferme);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchModalConf() {
  modalConf.style.display = "block";
}

function ferme(e) {
  e.preventDefault();
  modalConf.style.display = "none";
  modalbg.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validFirst(form.first) &&
    validLast(form.last) &&
    validEmail(form.email) &&
    validbirthdate(form.birthdate) &&
    validquantity(form.quantity) &&
    checkLocation() &&
    validcheckbox1(form.checkbox1)
  ) {
    launchModalConf();
  } else if (!checkLocation()) {
  }
});

// ecoute de la modification de l'input first
form.first.addEventListener("change", function () {
  validFirst(this);
});
/**
 * verification que le input first(prenom) est au moin 2 caracter et qu'une valeur et saissie
 * @param {*} inputPrenom
 * @returns
 */
const validFirst = function (inputPrenom) {
  const small = inputPrenom.nextElementSibling;
  if (inputPrenom.value.trim().length < 2) {
    small.innerHTML = "Veuillez entrer 2 caractères ou plus";
    small.style.color = "red";
    return false;
  } else {
    small.innerHTML = "Prenom valide";
    small.style.color = "green";
    return true;
  }
};

// ecoute de la modification de l'input last
form.last.addEventListener("change", function () {
  validLast(this);
});
/**
 * verification que le input last(nom) est au moin 2 carracter et qu'une valeur et saissie
 * @param {*} inputNom
 * @returns
 */
const validLast = function (inputNom) {
  const small = inputNom.nextElementSibling;
  if (inputNom.value.trim().length < 2) {
    small.innerHTML = "Veuillez entrer 2 caractères ou plus";
    small.style.color = "red";
    return false;
  } else {
    small.innerHTML = "Nom valide";
    small.style.color = "green";
    return true;
  }
};

// ecoute de la modification de l'input email
form.email.addEventListener("change", function () {
  validEmail(this);
});
/**
 * verification l'input email(l'adress mail) est bien valide avec une regex et une valeur de saissie
 * création d'une regex pour la validation de l'email
 * @param {*} inputEmail
 * @returns
 */
const validEmail = function (inputEmail) {
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9-.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  const testEmail = emailRegExp.test(inputEmail.value);
  const small = inputEmail.nextElementSibling;
  if (testEmail) {
    small.innerHTML = " L 'adresse électronique est valide.";
    small.style.color = "green";
    return true;
  } else {
    small.innerHTML = "Adresse électronique non conforme";
    small.style.color = "red";
    return false;
  }
};

// ecoute de la modification de l'input birthdate
form.birthdate.addEventListener("change", function () {
  validbirthdate(this);
});
/**
 * verification que l'input birthdate (date de naissance) est valide avec une regex et une valeur de saissie
 *
 * creation de la regex
 * @param {*} inputBirthdate
 * @returns
 */
const validbirthdate = function (inputBirthdate) {
  const birthdateRegexp = new RegExp(
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  );
  const testBirthdate = birthdateRegexp.test(inputBirthdate.value);
  const small = inputBirthdate.nextElementSibling;
  const currentYear = new Date().getFullYear();
  const yearFromInput = new Date(inputBirthdate.value).getFullYear();

  if (currentYear - yearFromInput > 100) {
    small.innerHTML = "Vous devez avoir - 100 ans ";
    small.style.color = "red";
    return false;
  }
  if (testBirthdate) {
    small.innerHTML = "date de naissance valide ";
    small.style.color = "green";
    return true;
  } else {
    small.innerHTML = "Vous devez entrer votre date de naissance";
    small.style.color = "red";
    return false;
  }
};

// ecoute de la modification de l'input quantity
form.quantity.addEventListener("change", function () {
  validquantity(this);
});
/**
 * veirification que l'input quantity(nombre de tournois) est valide avec une valeure de saissie entre 0 et 99
 * @param {*} inputQuantity
 * @returns
 */
const validquantity = function (inputQuantity) {
  const small = inputQuantity.nextElementSibling;
  if (
    inputQuantity.value < 0 ||
    inputQuantity.value > 99 ||
    inputQuantity.value.length < 1 ||
    isNaN(inputQuantity.value)
  ) {
    small.innerHTML = "Vous devez entrer un nombre entre 0 et 99";
    small.style.color = "red";
    return false;
  } else {
    small.innerHTML = "nombre de participation valide";
    small.style.color = "green";
    return true;
  }
};

// ecoute de la modification de l'input checkbox1 (cgu)
form.checkbox1.addEventListener("change", function () {
  validcheckbox1(this);
});
/**
 * verification que l'input checkbox1 (cgu) est cocher
 * @param {*} inputCheckBox1
 * @returns
 */

const validcheckbox1 = function (inputCheckBox1) {
  let textCgu = document.getElementById("cgu");
  if (inputCheckBox1.checked) {
    textCgu.innerHTML = " ";

    return true;
  } else {
    textCgu.innerHTML = " cgu obligatoire";
    textCgu.style.color = "red";
    return false;
  }
};

/**
 * boucle sur tout les location si elle trouve un de checked envoi true
 * @returns boolean
 */
const checkLocation = function () {
  var result = false;
  const villeLocation = document.getElementsByName("location");
  let textLoc = document.getElementById("text-loc");
  villeLocation.forEach((loc) => {
    if (loc.checked) {
      result = true;
    } else {
    }
  });
  return result;
};
