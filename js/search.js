/* DESPLEGAR, OCULTAR Y ACTUALZIAR LISTA DE RESULTADOS DE BUSQUEDA */

document.getElementById("searchbox").addEventListener("keyup", function (e) {
    let results = document.getElementById("results");
    let searchbox = document.getElementById("searchbox").value.toLowerCase();
    let resultitems;
    var recorrer;
    results.innerHTML = "";

    if (searchbox != "") {
        if (e.key === "Enter") {

        } else {
            fetch(PRODUCTS_URL)
                .then(respuesta => respuesta.json())
                .then(productos => {
                    for (let producto of productos) {
                        let nombre = producto.name.toLowerCase();
                        if (nombre.indexOf(searchbox) != -1) {
                            results.innerHTML += `<button class="resultitem list-group-item list-group-item-action" onclick="searchFromResultList('` + producto.name + `')"><span>` + producto.name + `</span><span class="searchicon">&#128270;</span></button>`;
                            results.style.display = "block";
                        }
                    }
                    if(e.key == "ArrowDown"){
                        document.getElementsByClassName("resultitem")[0].focus();
                    }
                }).catch(error => alert(error))
        }
    } else {
        results.style.display = "none";
    }

    
})

/* BUSQUEDA DESDE SELECCION DE LISTA DE RESULTADOS */

function searchFromResultList(nombreart) {
    document.getElementById("results").style.display = "none";
    document.getElementById("searchbox").value = nombreart
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(productos => {
            for (let producto of productos) {
                if (nombreart == producto.name) {
                    productgrid.innerHTML +=
                        `<a href="product-info.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="`+ producto.imgSrc + `" alt="` + producto.name + `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ producto.name + `</h4>
                                <small class="text-muted">`+ producto.currency + ` ` + producto.cost + `</small>
                            </div>
                            <p class="mb-1">`+ producto.description + `</p>
                            <p class="mb-1">Vendidos `+ producto.soldCount + `</p>
                        </div>
                    </div>
                </a>`;
                }
            }
        }).catch(error => alert(error))
}

/* BUSQUEDA DESDE BOTON DE BUSCAR */

function searchWhitButton() {
    let search = document.getElementById("searchbox").value.toLowerCase();
    let results = document.getElementById("results");
    productgrid.innerHTML = "";
    results.style.display = "none";
    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(productos => {
            for (let producto of productos) {
                if (producto.name.toLowerCase().includes(search)) {
                    productgrid.innerHTML +=
                        `<a href="product-info.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="`+ producto.imgSrc + `" alt="` + producto.name + `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ producto.name + `</h4>
                                <small class="text-muted">`+ producto.currency + ` ` + producto.cost + `</small>
                            </div>
                            <p class="mb-1">`+ producto.description + `</p>
                            <p class="mb-1">Vendidos `+ producto.soldCount + `</p>
                        </div>
                    </div>
                </a>`;
                }
            }
        }).catch(error => alert(error))
}

/* BUSQUEDA AL PRESIONAR ENTER */

document.getElementById("searchbox").addEventListener("keyup", function (event) {
    let results = document.getElementById("results");
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("btnbuscar").click();
        results.style.display = "none";
    }
});
