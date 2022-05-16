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

licenseHTML = document.getElementById('license');
specialityHTML = document.getElementById('floatingSelect');

let nameHTML = document.getElementById('name');
let surnameHTML = document.getElementById('surname');
let emailHTML = document.getElementById('email');
let passwordHTML = document.getElementById('password');
let passwordRepeatHTML = document.getElementById('passwordRepeat');
let buttonRegisterPatient = document.getElementById('buttonRegister');

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
  licenseUsr = licenseHTML.value;
  specialityUsr = specialityHTML.options[specialityHTML.selectedIndex].text;
  }
  if (window.location.pathname == "/Login.html"){
    rol = "paciente";
  }else{
    rol = "medico";
  }
  
  let newUser = new User (nameUsr,surnameUsr,emailUsr,licenseUsr,specialityUsr,passwordUsr,isAprobedUSr,rol);
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