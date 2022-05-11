class User {
  constructor(name, surname, email, license, speciality, password, isAprobed, isDoctor ){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.license = license;
    this.speciality = speciality;
    this.password = password;
    this.isAprobed = isAprobed;
    this.isDoctor = isDoctor
  }
}

let nameHTML = document.getElementById('name');
let surnameHTML = document.getElementById('surname');
let emailHTML = document.getElementById('email');
let licenseHTML = document.getElementById('license');
let specialityHTML = document.getElementById('floatingSelect');
let passwordHTML = document.getElementById('password');

function newUser() {
  let nameUsr = nameHTML.value;
  let surnameUsr = surnameHTML.value;
  let emailUsr = emailHTML.value;
  let licenseUsr = licenseHTML.value;
  let specialityUsr = specialityHTML.options[specialityHTML.selectedIndex].text;
  let passwordUsr = passwordHTML.value;
  if ( window.location == "./Login.html"){
    isDoctor = false;
  }else{
    isDoctor = true;
  }
  let isAprobedUSr = false; 

  let newUser = new User (nameUsr,surnameUsr,emailUsr,licenseUsr,specialityUsr,passwordUsr,isAprobedUSr,isDoctor);
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

function obtener() {
  let ObjUsr = newUser();
  fetch("http://localhost:3000/users/")
    .then((response) => response.json())
    .then((response) => {
      const filter = response.find(email => email.email == ObjUsr.email)
      if (filter){
        alert("el mail ya exsiste")
      }else{
        alert(`Bienvenido ${ObjUsr.name}`)
        postear(ObjUsr)
      }
    });
}
