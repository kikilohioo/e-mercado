let prodItems = document.getElementsByClassName("list-group-item");
let imageItems = document.getElementsByClassName("item-image");

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
                        <div class="col-3 item-image">
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

//Mostrar productos en forma de lista

function showListView(){
    for(let item of prodItems){
        item.classList.remove("col-6");
        item.classList.remove("col-md-3");
    }
    for(let itemimage of imageItems){
        itemimage.classList.remove("col-12");
        itemimage.classList.add("col-3");
    }
}

//Mostrar productos en forma de cuadricula

function showGridView(){
    for(let item of prodItems){
        item.classList.add("col-6");
        item.classList.add("col-md-3");
    }
    for(let itemimage of imageItems){
        itemimage.classList.remove("col-3");
        itemimage.classList.add("col-12");
    }
}