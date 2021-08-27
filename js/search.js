
document.getElementById("searchbox").addEventListener("keyup", function(e){
    let results = document.getElementById("results");
    let searchbox = document.getElementById("searchbox").value.toLowerCase();
    results.innerHTML ="";
    if(searchbox != ""){
        fetch(PRODUCTS_URL)
        .then(respuesta => respuesta.json())
        .then(productos => {
                for(let producto of productos){
                    let nombre = producto.name.toLowerCase();
                    if(nombre.indexOf(searchbox) != -1){
                        results.innerHTML += `<div class="list-group-item list-group-item-action" onclick="searchFromResultList("`+ producto.name +`")">`+ producto.name +`</div>`;
                        results.style.display = "block";
                    }
                }
        }).catch(error => alert(error))
    }else{
        results.style.display = "none";
    }
})

function searchFromResultList(nombreart){
    let results = document.getElementById("results"); 
    results.style.display = "none";
    let searchbox = document.getElementById("searchbox").value;
    searchbox = nombreart;
}