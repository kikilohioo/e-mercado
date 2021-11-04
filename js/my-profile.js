let namelbl = document.getElementById("usernamelbl");
let nameinp = document.getElementById("usernameinfo");
let agelbl = document.getElementById("agelbl");
let ageinp = document.getElementById("age");
let emaillbl = document.getElementById("emaillbl");
let emailinp = document.getElementById("email");
let phonelbl = document.getElementById("phonelbl");
let phoneinp = document.getElementById("phone");
let direclbl = document.getElementById("direclbl");
let direcinp = document.getElementById("direc");
let cardfooter1 = document.getElementById("cardfooter1");
let cardfooter2 = document.getElementById("cardfooter2");
let editphoto = document.getElementById("btneditphoto");
let usernickname = document.getElementById("usernickname");
var imgElement = document.querySelector('#profilepic');

//Función que se encarga de traer en tiempo de carga la información del localstorage
//o se encargar de crear las variables necesarias para cargarlo posteriormente

document.addEventListener("DOMContentLoaded", function (e) {
    let userinfo = {
        name: "---",
        age: 0,
        email: "---",
        phone: "---",
        direc: "---"
    }
    usernickname.innerHTML = window.localStorage.getItem('username');
    if (window.localStorage.getItem('userinfo') != undefined) {
        let userInfo = JSON.parse(window.localStorage.getItem('userinfo'));
        let imgdata = window.localStorage.getItem('imgdata');
        namelbl.innerHTML = userInfo.name;
        nameinp.value = userInfo.name;
        agelbl.innerHTML = userInfo.age + " años";
        ageinp.value = userInfo.age;
        emaillbl.innerHTML = userInfo.email;
        emailinp.value = userInfo.email;
        phonelbl.innerHTML = userInfo.phone;
        phoneinp.value = userInfo.phone;
        direclbl.innerHTML = userInfo.direc;
        direcinp.value = userInfo.direc;
        if(window.localStorage.getItem('imgdata') != undefined){
            imgElement.src = imgdata;
        }else{
            imgElement.src = "https://i.ibb.co/yFgtKJw/499-4992374-sin-imagen-de-perfil-hd-png-download.png";
        }
    } else {
        window.localStorage.setItem('userinfo', JSON.stringify(userinfo));
        window.localStorage.setItem('imgdata', "https://i.ibb.co/yFgtKJw/499-4992374-sin-imagen-de-perfil-hd-png-download.png")
    }
});

//Función que nos permite activar los campos para modificar la info del perfil

function activeEditInfo() {
    namelbl.innerHTML = "";
    nameinp.type = "text";
    agelbl.innerHTML = "";
    ageinp.type = "number";
    emaillbl.innerHTML = "";
    emailinp.type = "email";
    phonelbl.innerHTML = "";
    phoneinp.type = "text";
    direclbl.innerHTML = "";
    direcinp.type = "text";
    cardfooter2.style.display = "block"
    editphoto.style.display = "block"
    cardfooter1.style.display = "none"
}

//Función que oculta los campos para modificar info del perfil

function cancelEditInfo() {
    let userInfo = JSON.parse(window.localStorage.getItem('userinfo'));
    namelbl.innerHTML = userInfo.name;
    nameinp.type = "hidden";
    agelbl.innerHTML = userInfo.age + " años";
    ageinp.type = "hidden";
    emaillbl.innerHTML = userInfo.email;
    emailinp.type = "hidden";
    phonelbl.innerHTML = userInfo.phone;
    phoneinp.type = "hidden";
    direclbl.innerHTML = userInfo.direc;
    direcinp.type = "hidden";
    cardfooter1.style.display = "block"
    editphoto.style.display = "none"
    cardfooter2.style.display = "none"
    imgElement.src = window.localStorage.getItem('imgdata');
}

//Función que confirma la edción de los datos, se encarga tanto de los datos como de la imagen del perfil

function confirmEditInfo(){
    let userInfo = JSON.parse(window.localStorage.getItem('userinfo'));
    userInfo.name = nameinp.value;
    namelbl.innerHTML = nameinp.value;
    nameinp.type = "hidden";

    userInfo.age = ageinp.value;
    agelbl.innerHTML = ageinp.value + " años";
    ageinp.type = "hidden";

    userInfo.email = emailinp.value;
    emaillbl.innerHTML = emailinp.value;
    emailinp.type = "hidden";

    userInfo.phone = phoneinp.value;
    phonelbl.innerHTML = phoneinp.value;
    phoneinp.type = "hidden";

    userInfo.direc = direcinp.value;
    direclbl.innerHTML = direcinp.value;
    direcinp.type = "hidden";
    
    cardfooter1.style.display = "block"
    cardfooter2.style.display = "none"
    editphoto.style.display = "none"
    window.localStorage.setItem('userinfo', JSON.stringify(userInfo));
    let previmagedata = window.localStorage.getItem('previmgdata');
    if(window.localStorage.getItem('previmgdata') != undefined){
        window.localStorage.setItem('imgdata', previmagedata);
    }else{
        window.localStorage.setItem('imgdata', 'https://i.ibb.co/yFgtKJw/499-4992374-sin-imagen-de-perfil-hd-png-download.png');
    }
}

//Función para abrir openfiledialog

function editPhoto(){
    document.getElementById('photoedit').click();
}

//Función encargada de cargar imagen como url de datos al localstorage

function chargePhoto(newimage){
    const MAXIMO_TAMANIO_BYTES = 2000000;
    var image = newimage.files[0];

    if (image.size < MAXIMO_TAMANIO_BYTES){
        var reader = new FileReader();
  
        reader.onloadend = function () {
            imgElement.src = reader.result;
            window.localStorage.setItem('previmgdata', reader.result);
        }
    
        if (image) {
            reader.readAsDataURL(image);
        } else {
            imgElement.src = "";
        }
    }else{
        let alertcontainer = document.getElementById("alertcontainer");
        alertcontainer.innerHTML = 
        `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>¡Atención!</strong> las fotos de perfil no pueden pesar más de 2 MB!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
    }
}