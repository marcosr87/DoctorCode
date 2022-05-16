const inputEmail = document.querySelector("#emailUsers");
const inputPassword = document.querySelector("#passUsers");
const loginEmailError = document.querySelector("#msgEmailLogin");
const loginPasswordError = document.querySelector("#msgPasswordLogin");
const loginButtonError = document.querySelector("#msgButtonLogin");
const buttonLogin = document.querySelector("#buttonLogin");
const formLogin = document.querySelector(".form_login");
const API_URL = "http://localhost:3000"; //http://localhost:4000 si no usas: json-server --watch db.json --port 4000
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
    surname:/^[a-zA-ZÀ-ÿ\s]{3,30}$/,
    user: /^[a-zA-Z0-9\_\-]{8,30}$/, // Letras, numeros, guion y guion_bajo */
    password: /^.{8,30}$/, // 8 a 30 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    repeatPassword: /^.{8,30}$/
  };
  const camposLogin = {
    password : false,
    email: false
  };


  formLogin.addEventListener("submit", iniciar);
 function iniciar(evento){
    evento.preventDefault();
    console.log("se habilitó el evento");
    getUsers();
 }
const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    const user = validarUsuario(users);
    if (user != undefined) {
      window.sessionStorage.setItem('userLogged', JSON.stringify({name: user.name}));
      
    }
  } catch (error) {
    console.log(error);
  }
}
  function validarUsuario(users){ 
  console.log(users);
  const currentUser = users.find(
    (user) => user.email == inputEmail.value && 
    user.password == inputPassword.value
  );
  console.log(currentUser);
  if(currentUser == undefined) {
    document.querySelector(".form_error_imput").classList.add("msgActive");
    formLogin.reset();
  }
  else if(currentUser.rol == "admin") {
    document.querySelector(".form_error_imput").classList.remove("msgActive");
    localStorage.setItem("User",currentUser.email);
    localStorage.setItem("Condition", currentUser.isAprobed);
    localStorage.setItem("Role", currentUser.rol);
    localStorage.setItem("Id", currentUser.id);
    window.location.href = "./admin.html";
  }
  else if(currentUser.rol == "medico" && currentUser.isAprobed == true) {
    document.querySelector(".form_error_imput").classList.remove("msgActive");
    localStorage.setItem("User",currentUser.email);
    localStorage.setItem("Condition", currentUser.isAprobed);
    localStorage.setItem("Role", currentUser.rol);
    localStorage.setItem("Id", currentUser.id);
    window.location.href = "./medicos.html";
  }
  else if(currentUser.rol == "paciente" && currentUser.isAprobed == true){
    document.querySelector(".form_error_imput").classList.remove("msgActive");
    localStorage.setItem("User",currentUser.email);
    localStorage.setItem("Condition", currentUser.isAprobed);
    localStorage.setItem("Role", currentUser.rol);
    localStorage.setItem("Id", currentUser.id);
    window.location.href = "./turns.html";
  }
  else{
    alert("Usuario no aprobado");
  }
  formLogin.reset();
  return currentUser;
}

function verificar (entrada) {
  if (entrada.id == "emailUsers") {
    if (expressions.email.test(entrada.value)) {
      console.log("el email ingresado es correcto");
      camposLogin.email = true;
      loginEmailError.classList.remove("msgActive");
    }
    else{
      console.log("el email es incorrecto");
      camposLogin.email = false;
      loginEmailError.classList.add("msgActive");
    }
  }
  if (entrada.id == "passUsers") {
    if (expressions.password.test(entrada.value)) {
      console.log("la contraseña ingresada es correcta");
      camposLogin.password = true;
      loginPasswordError.classList.remove("msgActive");
    }
    else{
      console.log("la contraseña es incorrecta");
      camposLogin.password = false;
      loginPasswordError.classList.add("msgActive");
    }
  }
  habilitarBotonLogin(camposLogin);
  console.log(camposLogin.email);
  console.log(camposLogin.password);
}
function habilitarBotonLogin(campo){
  if (campo.email == true && campo.password == true) {
    buttonLogin.disabled = false;
    console.log("boton habilitado");
  } else {
    buttonLogin.disabled = true;
    console.log("boton deshabilitado");
  }
}

  // document.getElementById('ingreso').style.display = "none";
  // document.getElementById('miCuenta').style.display = "block";



function Exit(){
  localStorage.clear();
  window.location.href = "./Login.html"
}

