let usuario = window.localStorage.getItem('username');
let stars = document.getElementsByName('star');
let date = new Date();
let formatDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2,'0') + "-" + date.getDate().toString().padStart(2, '0') + " " + date.getHours() + ":" + date.getMinutes().toString().padStart(2,'0') + ":" + date.getSeconds();
let comentario = 
{
    score: 0,
    description: "",
    user: usuario,
    dateTime: formatDate
};
function calificar(){
    for(let star of stars){
        if(star.checked){
            comentario.score = star.value;
            comentario.description = document.getElementById('comentario').value;
            window.localStorage.setItem('comentarios', JSON.stringify(comentario));
            window.location.href = 'product-info.html';
        }
    }
}