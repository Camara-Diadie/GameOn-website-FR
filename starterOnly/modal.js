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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const close = document.querySelectorAll('.close');
close.forEach((btn) => btn.addEventListener("click", ferme));

// ecoute de la modification du formulaire 
const  form = document.querySelector('#inscription');

const modalConf = document.querySelector('.modal_confirmation');
const btnSUbt = document.querySelector('.btn-submit');

function launchModalConf() {
  modalConf.style.display = "block";
}

const fermer = document.querySelector('.close')

fermer.addEventListener('click',ferme); 

const badgrclose = document.querySelector(".btn-fermer");
badgrclose.addEventListener('click',ferme)
 

function ferme(e){
  e.preventDefault()
  modalConf.style.display ="none";

  modalbg.style.display ="none";

}
form.addEventListener('submit',function(e){

e.preventDefault();
if(validFirst(form.first) && validLast(form.last) && validEmail(form.email) && validbirthdate(form.birthdate) && validquantity(form.quantity) && checkLocation() && validcheckbox1(form.checkbox1) ){
launchModalConf();

}else if(!checkLocation()){
  alert('merci de selectioné une location ')

}
});


// ecoute de la modification de l'input first
form.first.addEventListener('change',function(){
  validFirst(this);
});
// ecoute de la modification de l'input last
form.last.addEventListener('change',function(){
  validLast(this);
});

// ecoute de la modification de l'input email
form.email.addEventListener('change',function(){
  validEmail(this);
});


// ecoute de la modification de l'input birthdate
form.birthdate.addEventListener('change',function(){
  validbirthdate(this);
});

// ecoute de la modification de l'input birthdate
form.birthdate.addEventListener('change',function(){
  validbirthdate(this);
});

// ecoute de la modification de l'input quantity
form.quantity.addEventListener('change',function(){
  validquantity(this);
});

// ecoute de la modification de l'input 
form.quantity.addEventListener('change',function(){
  validquantity(this);
});

// // ecoute de la modification de l'input location
// const villeLocation = document.getElementsByName('location')
// villeLocation.forEach(loc=> loc.addEventListener('change',function(){
//   validlocation(this);
// }))


// ecoute de la modification de l'input cgu
form.checkbox1.addEventListener('change',function(){
  validcheckbox1(this);
});



  
/**
 * verification que le input first(prenom) est au moin 2 caracter
 * @param {*} inputPrenom 
 * @returns 
 */
  const validFirst = function(inputPrenom){

    const small = inputPrenom.nextElementSibling;
    if (inputPrenom.value.length < 2 ) {
      small.innerHTML ='Veuillez entrer 2 caractères ou plus';
      small.style.color='red'
      return false;
    }else {
      small.innerHTML='prenom valide';
      small.style.color='green';
      return true;
    }
  }
  // verification que le input last(nom) est au moin 1 caracter

  const validLast = function(inputNom){

    const small = inputNom.nextElementSibling;
    if (inputNom.value.length < 2 ) {
      small.innerHTML ='Veuillez entrer 2 caractères ou plus';
      small.style.color='red';
      return false;
    }
    else{
      small.innerHTML ='nom valide';
      small.style.color='green';

      return true;
    }
  }

const validEmail = function(inputEmail){

  // création de la reg exp pour la validation de l'email
  const emailRegExp =  new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9-.-_]+[.]{1}[a-z]{2,10}$', 'g');
  const testEmail = emailRegExp.test(inputEmail.value);
  const small = inputEmail.nextElementSibling;
  if(testEmail){
    small.innerHTML =' L \'adresse électronique est valide.';
    small.style.color='green';

    return true;

  }else{
    small.innerHTML ='Adresse électronique non valide';
    small.style.color ='red';
    return false;
  }

}
const validbirthdate = function(inputBirthdate){
  const birthdateRegexp = new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
  const testBirthdate = birthdateRegexp.test(inputBirthdate.value);
  const small = inputBirthdate.nextElementSibling;
  const currentYear = new Date().getFullYear()
  const yearFromInput = new Date(inputBirthdate.value).getFullYear()
  
  if ( currentYear - yearFromInput > 100 ) {
  console.log('La date entrée en input est supérieure à 100 ans')
  }
  if(testBirthdate){

    small.innerHTML='date de naissance valide '; 
    small.style.color='green';
    return true;

  }else{
    small.innerHTML='Vous devez entrer votre date de naissance';
    small.style.color='red';
    return false;

  }

}

const validquantity = function(inputQuantity){

  const small = inputQuantity.nextElementSibling;
    if(inputQuantity.value < 0 || inputQuantity.value > 99 || inputQuantity.value.length < 1 || isNaN(inputQuantity.value)) {
      small.innerHTML='Vous devez entrer un nombre entre 0 et 99';
      small.style.color='red';
      return false;
    }
    else{
      small.innerHTML='good';
      small.style.color='green';
      return true;
    }
  }
const checkLocation = function(){
  
  var result = false;
  const villeLocation = document.getElementsByName('location')
  villeLocation.forEach(loc => {
  if(loc.checked){
    result = true;
  }
  else{

  }

})

 return result
}







    const validcheckbox1 = function(inputCheckBox1){
  const small = inputCheckBox1.nextElementSibling;
  if(inputCheckBox1.checked ){
   return true;
  }
  else{
   
    return false;

  }

}




