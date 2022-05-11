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
  
  function Mostrar(){
    let contenido = document.getElementById('contenido')
    
      fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(response => {
            
        contenido.innerHTML = ''
        for(let valor of response){
        contenido.innerHTML += `
              
          <tr class="align-bottom row-table">
            <th scope="row">${ valor.id }</th>
              <td class="align-top">${ valor.name }</td>
              <td class="align-top">${ valor.surname }</td>
              <td class="align-top">${ valor.email}</td>
              <td class="align-top">${ valor.isAprobed}</td>
            </tr> 
          `
          }
      })    
  }
  