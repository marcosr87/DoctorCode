class Doctor {
  constructor(name, surname, email, license, speciality, password ){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.license = license;
    this.speciality = speciality;
    this.password = password
  }
}

let nameHTML = document.getElementById('name');
let surnameHTML = document.getElementById('surname');
let emailHTML = document.getElementById('email');
let licenseHTML = document.getElementById('license');
let specialityHTML = document.getElementById('floatingSelect');
let passwordHTML = document.getElementById('password');

function newDoctor() {
  let nameDoc = nameHTML.value;
  let surnameDoc = surnameHTML.value;
  let emailDoc = emailHTML.value;
  let licenseDoc = licenseHTML.value;
  let specialityDoc = specialityHTML.options[specialityHTML.selectedIndex].text;
  let passwordDoc = passwordHTML.value;
  let newDoc = new Doctor(nameDoc,surnameDoc,emailDoc,licenseDoc,specialityDoc,passwordDoc);
  console.log(newDoc);
  return newDoc
}

function postear() {
  fetch("http://localhost:3000/doctors/", {
    method: "POST",
    body: JSON.stringify(newDoctor()),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((response) => alert(`Bienvenido ${response.name}`))
}
