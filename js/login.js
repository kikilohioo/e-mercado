//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function onSignIn(){
    window.location.href = "inicio.html";
}
function getUserName(){
    let email = document.getElementById("user").value;
    let mistorage = window.localStorage;
    fetch("../users.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        for(let user of datos){
            if(email == user.name){
                mistorage.setItem('username', user.name);
            }
        }
    }).
    catch(error => alert(error));
}
document.addEventListener("DOMContentLoaded", function(e){
    
});