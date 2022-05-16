
if (localStorage.getItem("Role") == "admin"){
  console.log("hola")
}else{
  window.location = "../index.html";
}

function Exit(){
  localStorage.clear();
  window.location.href = "./Login.html"
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
                <i class="fa fa-times mx-2" type="submit" aria-hidden="true" onclick="eliminar(${valor.id})"></i>  
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

function eliminar(id){
  fetch(`http://localhost:3000/users/${id}`,{
    method: 'DELETE'
  })  
}
