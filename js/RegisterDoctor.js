class User {
  constructor(name, surname, email, license, speciality, password, isAprobed, rol ){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.license = license;
    this.speciality = speciality;
    this.password = password;
    this.isAprobed = isAprobed;
    this.rol = rol
  }
}
let licenseHTML = null;
let specialityHTML = "";
let errorName = document.getElementById('error-nameRegister');
let errorSurname = document.getElementById('error-surnameRegister');
let errorEmail = document.getElementById('error-emailRegister');
let errorSpeciality = document.getElementById('error-specialityRegister');
let errorPassword = document.getElementById('error-passwordRegister');
let errorPasswordRepeat = document.getElementById('error-repeatPasswordRegister');

//   const expressions = {
//   name: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
//   surname:/^[a-zA-ZÀ-ÿ\s]{3,30}$/,
//   user: /^[a-zA-Z0-9\_\-]{8,30}$/, // Letras, numeros, guion y guion_bajo */
//   password: /^.{8,30}$/, // 8 a 30 digitos.
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   repeatPassword: /^.{8,30}$/
// };

// const registerField = {
//   nameRegister: false,
//   surnameRegister: false,
//   emailRegister: false,
//   specialityRegister: false,
//   passwordRegister: false,
//   passwordRepeatRegister: false
// }

licenseHTML = document.getElementById('license');
specialityHTML = document.getElementById('floatingSelect');

let nameHTML = document.getElementById('name');
let surnameHTML = document.getElementById('surname');
let emailHTML = document.getElementById('email');
let passwordHTML = document.getElementById('password');
let passwordRepeatHTML = document.getElementById('passwordRepeat');
let buttonRegisterPatient = document.getElementById('buttonRegister');

// function registerVerification(entrance){
//   console.log(entrance.id)
//   if(entrance.id=="name"){
//     if(expressions.name.test(entrance.value)){
//       registerField.nameRegister = true;
//       errorName.classList.remove('msgActive');
//     }else{
//       registerField.nameRegister = false;
//       errorName.classList.add('msgActive');
//     }
//   }
//   if(entrance.id=="surname"){
//     if(expressions.surname.test(entrance.value)){
//       registerField.surnameRegister = true;
//       errorSurname.classList.remove('msgActive');
//     }else{
//       registerField.surnameRegister = false;
//       errorSurname.classList.add('msgActive');
//     }
//   }
//   if(entrance.id=="email"){
//     if(expressions.email.test(entrance.value)){
//       registerField.emailRegister = true;
//       errorEmail.classList.remove('msgActive');
//     }else{
//       registerField.emailRegister = false;
//       errorEmail.classList.add('msgActive');
//     }
//   }
//   if(entrance.id=="password"){
//     if(expressions.password.test(entrance.value)){
//       registerField.passwordRegister = true;
//       errorPassword.classList.remove('msgActive');
//     }else{
//       registerField.passwordRegister = false;
//       errorPassword.classList.add('msgActive');
//     }
//   }
//   if(entrance.id=="passwordRepeat"){
//     if(expressions.passwordRepeat.test(entrance.value)){
//       registerField.passwordRepeatRegister = true;
//       errorPasswordRepeat.classList.remove('msgActive');
//     }else{
//       registerField.passwordRepeatRegister = false;
//       errorPasswordRepeat.classList.add('msgActive');
//     }
//   }
//   buttonRegisterAvailable(registerField);
// }

// function buttonRegisterAvailable(field){
//   if(field.nameRegister == true && field.surnameRegister == true && 
//     field.emailRegister == true && field.specialityRegister == true && 
//     field.passwordRegister == true && field.passwordRepeatRegister == true 
//     && passwordHTML.value == passwordRepeatHTML.value
//     ){
//       buttonRegisterPatient.disabled = false;
//       console.log("boton habilitado");
//   }else{
//       buttonRegisterPatient.disabled = true;
//       console.log("boton deshabilitado");
//   }
// }

function newUser() {
  let licenseUsr;
  let specialityUsr;
  let rol;
  let nameUsr = nameHTML.value;
  let surnameUsr = surnameHTML.value;
  let emailUsr = emailHTML.value;
  let passwordUsr = passwordHTML.value;
  let isAprobedUSr = false;
  if (window.location.pathname === "/RegisterDoc.html"){
  console.log(window.location.pathname)
  console.log(licenseUsr);
  licenseUsr = licenseHTML.value;
  specialityUsr = specialityHTML.options[specialityHTML.selectedIndex].text;
  console.log(licenseUsr)
  }
  if (window.location.pathname == "/Login.html"){
    rol = "paciente";
  }else{
    rol = "medico";
  }
  
  let newUser = new User (nameUsr,surnameUsr,emailUsr,licenseUsr,specialityUsr,passwordUsr,isAprobedUSr,rol);
  console.log(newUser);
  return newUser
}


function postear(Object) {
  fetch("http://localhost:3000/users/", {
    method: "POST",
    body: JSON.stringify(Object),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((response) => response)
}

function obtener(event) {
  event.preventDefault();
  let ObjUsr = newUser();
  fetch("http://localhost:3000/users/")
    .then((response) => response.json())
    .then((response) => {
      const filter = response.find(email => email.email == ObjUsr.email)
      if (filter){
        alert("el mail ya existe")
      }else{
        alert(`Bienvenido ${ObjUsr.name}`)
        postear(ObjUsr)
      }
    });
}

// const input = document.getElementsByClassName("botonRegistro");

// input.addEventListener("click", ( )=>{
//   window.location.href='./Login.html'
// });