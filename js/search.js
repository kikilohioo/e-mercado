let results = document.getElementById("results");
let searchbox = document.getElementById("searchbox").value.toLowerCase();

document.getElementById("searchbox").addEventListener("keyup", function(e){
    results.innerHTML ="";
    if(searchbox != ""){
        fetch(PRODUCTS_URL)
        .then(respuesta => respuesta.json())
        .then(productos => {
                for(let producto of productos){
                    let nombre = producto.name.toLowerCase();
                    if(nombre.indexOf(searchbox) != -1){
                        results.innerHTML += `<div class="list-group-item list-group-item-action" onclick="">`+ producto.name +`</div>`;
                        results.style.display = "block";
                    }
                }
        }).catch(error => alert(error))
    }else{
        results.style.display = "none";
    }
})