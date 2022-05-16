let especialidadHTML = document.getElementById('seleccion1');
let profesionalHTML = document.getElementById('seleccion2');
let fechaHTML = document.getElementById('fecha1'); 
let horariosHTML = document.getElementById('horarios');
let consultaHTML = document.getElementById('consulta'); //no anda
let esp, prof, fecha, hora, consulta1;
let btnRegistrar = document.getElementById('btn-registrar');
let btnMostrar = document.getElementById('btn-mostrar');
let fila = document.getElementById('fila11');
let NameDoc = '';

function obtenerEsp(){
  esp = especialidadHTML.options[especialidadHTML.selectedIndex].text;

  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => {  
      const arrayMedico = response.filter(item => item.rol == "medico");    
      if(arrayMedico){
        profesionalHTML.innerHTML = ''
        for(let valor of arrayMedico){
          if(valor.speciality==esp){
            profesionalHTML.innerHTML += `
              <option>${valor.name} ${valor.surname}</option>
            `
          }
        }
      }
    })
}

function Registrar(){
  prof = profesionalHTML.options[profesionalHTML.selectedIndex].text;
  fecha = fechaHTML.value;
  hora = horariosHTML.options[horariosHTML.selectedIndex].text;
  consulta1 = JSON.stringify(consultaHTML.value);

  fetch('http://localhost:3000/turnos', {
    method: 'POST',
    body: JSON.stringify({
      especialidad: esp,
      nombreMedico: prof,
      fechaturno: fecha,
      horario: hora,
      consulta: consulta1,
      idPaciente: localStorage.getItem("Id")
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
}

let ValorId = localStorage.getItem("Id");

function mostrarTurno (){
  let turnos = document.getElementById('turno-paciente')
  turnos.innerHTML = '';

  fetch('http://localhost:3000/turnos')
    .then(response => response.json())
    .then(response => {        
      for(let valor of response){
        if (valor.idPaciente == ValorId){
          turnos.innerHTML += `
          <div class="card mx-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Turno Seleccionado</h5>
            <p class="card-text"> ${valor.especialidad} <br> ${valor.nombreMedico} <br> ${valor.fechaturno} <br> ${valor.horario} <br> ${valor.consulta}</p>

          </div>
        </div>` 
         }
      }
    })
}

function Exit(){
  localStorage.clear();
  window.location.href = "./Login.html"
}

if (JSON.parse(localStorage.getItem("Role")) == "paciente"){
  alert("Hola")
}else{
  window.location = "../index.html";
}