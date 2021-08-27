document.getElementById("searchbox").addEventListener("keyup", function (e) {
    let results = document.getElementById("results");
    let searchbox = document.getElementById("searchbox").value.toLowerCase();
    results.innerHTML = "";
    if (searchbox != "") {
        fetch(PRODUCTS_URL)
            .then(respuesta => respuesta.json())
            .then(productos => {
                for (let producto of productos) {
                    let nombre = producto.name.toLowerCase();
                    if (nombre.indexOf(searchbox) != -1) {
                        results.innerHTML += `<div class="list-group-item list-group-item-action" onclick="searchFromResultList('` + producto.name + `')">` + producto.name + `</div>`;
                        results.style.display = "block";
                    }
                }
            }).catch(error => alert(error))
    } else {
        results.style.display = "none";
    }
})

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

function searchWhitButton(){
    let search = document.getElementById("searchbox").value.toLowerCase();
    productgrid.innerHTML = "";


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
