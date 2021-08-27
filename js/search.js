document.getElementById("searchbox").addEventListener("keyup", function(e){
    let results = document.getElementById("results");
    let searchbox = document.getElementById("searchbox");

    if(searchbox.value != ""){
        results.style.display = "block";
    }else{
        results.style.display = "none";
    }

    fetch(PRODUCTS_URL)
    .then(respuesta => respuesta.json())
    .then(datos => {
        
    }).catch(error => alert(error))
})