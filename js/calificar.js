let usuario = window.localStorage.getItem('username');
let car = window.localStorage.getItem('productDisplay');
let stars = document.getElementsByName('star');
let date = new Date();
let formatDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2,'0') + "-" + date.getDate().toString().padStart(2, '0') + " " + date.getHours() + ":" + date.getMinutes().toString().padStart(2,'0') + ":" + date.getSeconds();
let comentarioInicial = 
[{
    car: car,
    score: 0,
    description: "",
    user: usuario,
    dateTime: formatDate
}];
let comentarioAgregado = 
{
    car: car,
    score: 0,
    description: "",
    user: usuario,
    dateTime: formatDate
}
function calificar(){
    for(let star of stars){
        if(star.checked){
            if(window.localStorage.getItem('comentarios') == undefined){
                comentarioInicial[0].score = star.value;
                comentarioInicial[0].description = document.getElementById('comentario').value;
                window.localStorage.setItem('comentarios', JSON.stringify(comentarioInicial));
                window.location.href = 'product-info.html';
            }else{
                let nuevosComentarios = JSON.parse(window.localStorage.getItem("comentarios"));
                comentarioAgregado.score = star.value;
                comentarioAgregado .description = document.getElementById('comentario').value;
                nuevosComentarios.push(comentarioAgregado);
                window.localStorage.setItem('comentarios', JSON.stringify(nuevosComentarios));
                window.location.href = 'product-info.html';
            }
        }
    }
}
[{"score":"3","description":"safasfasfas","user":"Caiqui Viera","dateTime":"2021-09-28 15:08:27"}]