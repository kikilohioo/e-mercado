document.getElementById("searchbox").addEventListener("keyup", function(e){
    let results = document.getElementById("results");
    let searchbox = document.getElementById("searchbox").value.toLowerCase();
    results.innerHTML ="";
    if(searchbox.value != ""){
        results.style.display = "block";
    }else{
        results.style.display = "none";
    }

    fetch(PRODUCTS_URL)
    .then(respuesta => respuesta.json())
    .then(productos => {
        for(let producto of productos){
            let nombre = producto.name.toLowerCase();
            if(nombre.indexOf(searchbox) != -1){
                results.innerHTML += `<a href="#" class="list-group-item list-group-item-action">`+ producto.name +`</a>`;
            }
        }
    }).catch(error => alert(error))
})