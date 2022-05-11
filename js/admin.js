function Ingresar(event){
    event.preventDefault();
    let emailAdmin = document.getElementById('emailLogin').value;
    let passAdmin = document.getElementById('pass').value;
    fetch('http://localhost:3000/usuariosRegistrados')
    .then(response => response.json())
    .then(response => {        
      if(response[0].correo==emailAdmin && response[0].contraseña==passAdmin){
        window.location = "../admin.html";
      }
    })  
}
  
Mostrar();
function Mostrar(){
  let contenido = document.getElementById('contenido')
    
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(response => {
      contenido.innerHTML = ''
      for(let valor of response){
        if(valor.isAprobed==false){
          contenido.innerHTML += `
          <tr class="align-bottom row-table">
            <th scope="row">${ valor.id }</th>
              <td class="align-top">${ valor.name }</td>
              <td class="align-top">${ valor.surname }</td>
              <td class="align-top">${ valor.email}</td>
              <td class="align-top"> 
                <i class="fa fa-check mx-2" type="submit" aria-hidden="true" onclick="modificar(${valor.id})"></i>
                <i class="fa fa-times mx-2" type="submit" aria-hidden="true"></i>  
              </td>
          </tr> 
           `
          }
        }
      })    
  }
  
function modificar(id){
  fetch(`http://localhost:3000/users/${id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      isAprobed: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })  
}
