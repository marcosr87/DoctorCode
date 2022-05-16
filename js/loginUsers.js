// //FUNCION INGRESAR YA NO SIRVE

// function Ingresar(event){
//     event.preventDefault();
//     let emailUsers = document.getElementById('emailUsers').value;
//     let passUsers= document.getElementById('passUsers').value;
//     fetch('http://localhost:3000/users')
//     .then(response => response.json())
//     .then(response => {
//       const filter = response.find(item => item.email == emailUsers)
//       if (filter) {
//         if (filter.isAprobed == true) {
//           if (filter.password == passUsers) {
//             localStorage.setItem("User",filter.email);
//             localStorage.setItem("Role", filter.isAprobed);
//             localStorage.setItem("Id", filter.id);
//             window.location = "./turns.html";
//           } else {
//             alert("Contraseña incorrecta");
//           }
//         } else {
//           alert("Usuario no aprobado");
//         }
//       } else {
//         alert(`${emailUsers} no esta registrado`);
//       }
//     });
// }

// function Exit(){
//   localStorage.clear();
// }



/*for(let valor of response){
  if(valor.isAprobed == "true"){
       if(valor.email==emailUsers && valor.password==passUsers){
          window.location = "./turns.html";
        } 
  }
  else{
    alert("Usuario no aprobado")
  }
}  */