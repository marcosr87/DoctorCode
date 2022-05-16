console.log(localStorage.getItem('Id'))
if(localStorage.getItem('Id')){
  document.querySelector("#ingreso").classList.add('d-none');
  document.querySelector("#miCuenta").classList.remove('d-none');
  document.querySelector("#miCuenta").classList.add('d-block');
}
else{
  document.querySelector("#ingreso").classList.remove('d-none');
  document.querySelector("#miCuenta").classList.remove('d-block');
  document.querySelector("#miCuenta").classList.add('d-none');
}

function Exit(){
  localStorage.clear();
  window.location.href = "./index.html"
}
