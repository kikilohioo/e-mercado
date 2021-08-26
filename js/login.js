//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let USERS_URL = "https://kikilohioo.github.io/e-mercado/users.json";
function onSignIn(){
    window.location.href = "inicio.html";
}
function getUserName(){
    let user = document.getElementById("user").value;
    let mistorage = window.localStorage;
    fetch(USERS_URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            mistorage.setItem('username', user);
        }).catch(error => alert(error))
}
document.addEventListener("DOMContentLoaded", function(e){
    
});