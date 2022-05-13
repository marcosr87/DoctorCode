
// if (JSON.parse(localStorage.getItem("roll")).correo == "admin@correo.com"){
// alert("Hola")
// }else{
//   window.location = "../index.html";
// }

function Exit(){
  localStorage.clear();
  window.location.href = "./LoginDoc.html"
}

function Ingresar(event){
    event.preventDefault();
    let emailAdmin = document.getElementById('emailLogin').value;
    let passAdmin = document.getElementById('pass').value;
   if (emailAdmin == "admin@correo.com"){
    fetch('http://localhost:3000/usuariosRegistrados')
    .then(response => response.json())
    .then(response => {        
      if(response[0].correo==emailAdmin && response[0].contraseña==passAdmin){
       localStorage.setItem("roll", emailAdmin)
        window.location = "../admin.html";
      }
    }) 
   }
   else{
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => {
      const filter = response.find(item => item.email == emailAdmin)
      if (filter) {
        if (filter.isAprobed == true) {
          if (filter.password == passAdmin) {
            localStorage.setItem("User",filter.email);
            localStorage.setItem("Role", filter.isAprobed);
            localStorage.setItem("Id", filter.id);
            window.location = "./medicos.html";
          } else {
            alert("Contraseña incorrecta");
          }
        } else {
          alert("Usuario no aprobado");
        }
      } else {
        alert(`${emailUsers} no esta registrado`);
      }
    });
}
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
