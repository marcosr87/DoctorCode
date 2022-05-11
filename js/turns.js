let especialidadHTML = document.getElementById('seleccion1');
let profesionalHTML = document.getElementById('seleccion2');
let fechaHTML = document.getElementById('fecha1'); 
let horariosHTML = document.getElementById('horarios');
let consultaHTML = document.getElementById('consulta'); 
let esp, prof, fecha, hora, consulta1;
let btnRegistrar = document.getElementById('btn-registrar');
let btnMostrar = document.getElementById('btn-mostrar');
let fila = document.getElementById('fila11');

function obtenerEsp(){
    esp = especialidadHTML.options[especialidadHTML.selectedIndex].text;
  
    fetch('http://localhost:3000/medicos')
      .then(response => response.json())
      .then(response => {        
        profesionalHTML.innerHTML = ''
        for(let valor of response){
          if(valor.especialidad==esp){
            profesionalHTML.innerHTML += `
              <option>${valor.nombre}</option>
            `
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
        consulta: consulta1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }
  
  
  function mostrarTurno (){
    let turnos = document.getElementById('turno-paciente')
  
    fetch('http://localhost:3000/turnos')
      .then(response => response.json())
      .then(response => {        
        
        for(let valor of response){
          if (valor.especialidad == 'Pediatría'){
            turnos.innerHTML += `
            <div class="card mx-3" style="width: 18rem;">
            <div class="card-body  ">
              <h5 class="card-title">Turno Seleccionado</h5>
              <p class="card-text"> ${valor.especialidad} <br> ${valor.nombreMedico} <br> ${valor.fechaturno} <br> ${valor.horario} <br> ${valor.consulta}</p>
  
            </div>
          </div>` 
           }
        }
      })
  }
  