    
    /*FILTRO DE ORDENAR POR RELEVANCIA(más vendidos)*/

document.getElementById("sortByRel").addEventListener('click', function(e){
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(datos => {
        let productos = datos;
        
        //ordenar producto del array segun una propiedad de dicho producto
        productos.sort(function (a, b) {
            if (a.soldCount > b.soldCount) {
              return 1;
            }
            if (a.soldCount < b.soldCount) {
              return -1;
            }
            return 0;
          });
        
        //modificar el html con los productos organizados
        for(let producto of productos){
            productgrid.innerHTML += 
            `<a href="product-info.html" class="list-group-item list-group-item-action">
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
            </a>`;
        }
      }).
    catch(error => alert(error));
});

    /*FILTRO PARA ORDENAR DE LA A-Z*/

document.getElementById("sortAsc").addEventListener('click', function(e){
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(datos => {
        let productos = datos;
        
        //ordenar producto del array segun una propiedad de dicho producto
        productos.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        
        //modificar el html con los productos organizados
        for(let producto of productos){
            productgrid.innerHTML += 
            `<a href="product-info.html" class="list-group-item list-group-item-action">
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
            </a>`;
        }
      }).
    catch(error => alert(error));
});

    /*FILTRO PARA ORDENAR DE LA Z-A*/

document.getElementById("sortDesc").addEventListener('click', function(e){
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(datos => {
        let productos = datos;
        
        //ordenar producto del array segun una propiedad de dicho producto
        productos.sort(function (a, b) {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
        
        //modificar el html con los productos organizados
        for(let producto of productos){
            productgrid.innerHTML += 
            `<a href="product-info.html" class="list-group-item list-group-item-action">
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
            </a>`;
        }
      }).
    catch(error => alert(error));
});

    /*FILTRO PARA ORDENAR POR PRECIO DE MAYOR A MENOR*/

document.getElementById("sortByHighFirst").addEventListener('click', function(e){
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(datos => {
        let productos = datos;
        
        //ordenar producto del array segun una propiedad de dicho producto
        productos.sort(function (a, b) {
            if (a.cost < b.cost) {
              return 1;
            }
            if (a.cost > b.cost) {
              return -1;
            }
            return 0;
          });
        
        //modificar el html con los productos organizados
        for(let producto of productos){
            productgrid.innerHTML += 
            `<a href="product-info.html" class="list-group-item list-group-item-action">
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
            </a>`;
        }
      }).
    catch(error => alert(error));
});

    /*FILTRO PARA ORDENAR POR PRECIO DE MENOR A MAYOR*/

document.getElementById("sortByLowFirst").addEventListener('click', function(e){
    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(datos => {
        let productos = datos;
        
        //ordenar producto del array segun una propiedad de dicho producto
        productos.sort(function (a, b) {
            if (a.cost > b.cost) {
              return 1;
            }
            if (a.cost < b.cost) {
              return -1;
            }
            return 0;
          });
        
        //modificar el html con los productos organizados
        for(let producto of productos){
            productgrid.innerHTML += 
            `<a href="product-info.html" class="list-group-item list-group-item-action">
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
            </a>`;
        }
      }).
    catch(error => alert(error));
});

    /*FILTRO PARA DEJAR PRODUCTOS ENTRE 2 PRECIOS(tambien mayor o menor a x precio)*/

document.getElementById("rangeFilterCount").addEventListener('click', function(e){
    let minFilter = document.getElementById("rangeFilterCountMin");
    let maxFilter  = document.getElementById("rangeFilterCountMax");

    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";

    fetch(PRODUCTS_URL).
      then(respuesta => respuesta.json()).
      then(productos => {
        for(let producto of productos){
            if(minFilter.value != "" && maxFilter.value != ""){
                if(producto.cost > minFilter.value && producto.cost < maxFilter.value){
                    productgrid.innerHTML += 
                    `<a href="product-info.html" class="list-group-item list-group-item-action">
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
                    </a>`;
                }
            }else if(minFilter.value != ""){
                if(producto.cost > minFilter.value){
                    productgrid.innerHTML += 
                    `<a href="product-info.html" class="list-group-item list-group-item-action">
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
                    </a>`;
                }
            }else if(maxFilter.value != ""){
                if(producto.cost < maxFilter.value){
                    productgrid.innerHTML += 
                    `<a href="product-info.html" class="list-group-item list-group-item-action">
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
                    </a>`;
                }
            }
        }
      }).
    catch(error => alert(error));
});

    /*LIMPIAR FILTROS*/

document.getElementById("clearRangeFilter").addEventListener("click", function (e) {
    let minFilter = document.getElementById("rangeFilterCountMin");
    let maxFilter  = document.getElementById("rangeFilterCountMax");

    let productgrid = document.getElementById("productgrid");
    productgrid.innerHTML = "";
    fetch(PRODUCTS_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            for(let producto of datos){
                productgrid.innerHTML += 
                `<a href="product-info.html" class="list-group-item list-group-item-action">
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
                </a>`;
            }
            minFilter.value = "";
            maxFilter.value = "";
        }).catch(error => alert(error))
});
