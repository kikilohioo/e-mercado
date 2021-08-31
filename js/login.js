let USERS_URL = "https://kikilohioo.github.io/e-mercado/users.json";
let mistorage = window.localStorage;

/* INICIO DE SESION CON GOOGLE */

function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    mistorage.setItem('username', profile.getName());
    window.location.href = "inicio.html";
}

/* INICIO DE SESION CON CREDENCIALES EN JSON(cvcommunitymanager@gmail.com o romi1999@gmail.com) */

function getUserName(){
    let email = document.getElementById("user").value;
    fetch(USERS_URL)
        .then(respuesta => respuesta.json())
        .then(users => {
            for(let user of users){
                if(email == user.email){
                    mistorage.setItem('username', user.name);
                    window.location.href = "inicio.html";
                }
            }
        }).catch(error => alert(error))
}
document.addEventListener("DOMContentLoaded", function(e){
    
});