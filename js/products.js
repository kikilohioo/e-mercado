//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";
    fetch(PRODUCTS_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            for(let producto of datos){
                productgrid.innerHTML += 
                `<span onclick="viewProduct(`+`'` + producto.name + `'` +`)" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="`+ producto.imgSrc + `" alt="`+ producto.name +`" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ producto.name +`</h4>
                                <small class="text-muted">`+ producto.currency + ` ` + producto.cost + `</small>
                            </div>
                            <p class="mb-1">`+ producto.description +`</p>
                            <p class="mb-1">Vendidos `+ producto.soldCount +`</p>
                        </div>
                    </div>
                </span>`;
            }
        }).catch(error => alert(error))
});