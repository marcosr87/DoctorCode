let btnMostrar = document.getElementById('btn-mostrar');

function Mostrar(){
  let contenido = document.getElementById('contenido')
  
    fetch('http://localhost:3000/turnos')
      .then(response => response.json())
      .then(response => {
          
      contenido.innerHTML = ''
      for(let valor of response){
      contenido.innerHTML += `
            
        <tr class="align-bottom row-table">
          <th scope="row">${ valor.id }</th>
            <td class="align-top">${ valor.especialidad }</td>
            <td class="align-top">${ valor.nombreMedico }</td>
            <td class="align-top">${ valor.fechaturno}</td>
            <td class="align-top">${ valor.horario}</td>
            <td class="align-top">${ valor.consulta}</td>
          </tr> 
        `
        }
    })    
}

function Registrar(){
  let nombreDoc = document.getElementById("nombre").value;
  let apellidoDoc = document.getElementById("apellido").value;
  let emailDoc = document.getElementById("email").value;
  let matriculaDoc = document.getElementById("matricula").value;
  let especialidadDoc = document.getElementById("especialidad").value;
  let contraseñaDoc = document.getElementById("passDoctor").value;

  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    body: JSON.stringify({
      nombre: nombreDoc,
      apellido: apellidoDoc,
      especialidad: especialidadDoc,
      matricula: matriculaDoc,
      email: emailDoc,
      contraseña: contraseñaDoc,
      isAprobed: false,
      isDoctor: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))

  swal('Usuario creado','','success');
  // swal({
  //   title: "Turno registrado",
  //   timer: 500000,
  //   icon: "success",
  //   button: "Gracias",
  // });
}