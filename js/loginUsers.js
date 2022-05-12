function Ingresar(event){
    event.preventDefault();
    let emailUsers = document.getElementById('emailUsers').value;
    let passUsers= document.getElementById('passUsers').value;
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => {
      const filter = response.find(item => item.email == emailUsers)
      if (filter.isAprobed == true){
        if (filter.password == passUsers) {
          window.location = "./turns.html"
        }  
      }else{
        alert("Usuario no aprobado")
      }
          
  })  
}



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