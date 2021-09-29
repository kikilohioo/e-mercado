let productSearch = window.localStorage.getItem('productDisplay');
let main = document.getElementById("main");
let comments = document.getElementById("comments");
let sliderContainer = document.getElementById("slider-container");
let relatedProdContainer = document.getElementById("related-prod");
let relatedProds;
let carIndex;

document.addEventListener("DOMContentLoaded", function(e){
    sliderContainer.innerHTML = "";
    let slider = `<div id="slider" class="w3-content w3-display-container" style="max-width:600px">`;
    
    //Función que carga el carrusel e informacion sobre el producto
    fetch(PRODUCT_INFO_URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            for(let info of datos){
                if(info.name == productSearch){
                    for(let image of info.images){
                        slider += `<img class="mySlides" src="`+ image +`" style="width:100%">`;
                    }
                    slider += 
                    `<div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
                        <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                        <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>`;
                    var i = 0;
                    for(let image of info.images){
                        i++;
                        slider += `<span style="margin: 0px 5px" class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(`+ i +`)"></span>`;
                    }
                    slider += `</div></div>`;
                    sliderContainer.innerHTML += slider;
                    main.innerHTML += 
                        `<div id="info-container">
                            <h1>`+ info.name +`
                                <h4 id="stars-container"></h4>
                            </h1>`+
                            `<span style="width:100%;padding-top:15px">Vendidos `+ info.soldCount +`</span>`+
                            `<p id="description">`+ info.description +`</p>
                            <div>
                                <button type="button" class="btn btn-success"> Comprar </button>
                                <br><br><button type="button" class="btn btn-default"><i class="fas fa-shopping-cart"
                                style="font-size: 15px;color: white;"></i> Agregar al Carrito</button>
                            </div>
                        </div>`
                    showDivs(slideIndex);
                    relatedProds = info.relatedProducts
                    
                    fetch(PRODUCTS_URL)
                        .then(respuesta => respuesta.json())
                        .then(datos =>{
                            let relacioandos = relatedProds;
                            //Productos relacionados cargar
                            for(let related of relacioandos){
                                relatedProdContainer.innerHTML += 
                                `<div class="col-sm-4">
                                    <div class="card"> <img src="${ datos[related].imgSrc }" class="card-img-top" width="100%">
                                        <div class="card-body pt-0 px-0">
                                            <h5 class="pl-3">${datos[related].name}</h5>
                                            <div class="d-flex flex-row justify-content-between mb-0 px-3"> <small class="text-muted mt-1">PRECIO A PARTIR DE</small>
                                                <h5> ${ datos[related].currency + " " + datos[related].cost }</h5>
                                            </div>
                                            <div class="mx-3 mt-3 mb-2"><button type="button" onclick="viewProduct(`+`'` + datos[related].name + `'` +`)" class="btn btn-info btn-block"><small>VER PRODUCTO</small></button></div>
                                        </div>
                                    </div>
                                </div>`
                            }
                        })
                }
            }
            
        })
        .catch(error => alert(error));
    
    
    
    //Función encargada de gestionar los comentarios
    fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            //Carga de comentarios desde json
            for(let info of datos){
                if(info.name == productSearch){
                    //Comprobación de si existe un nuevo comentario agregado
                    if(localStorage.getItem('comentarios') !== null){
                        let comentariosNuevos = JSON.parse(localStorage.getItem('comentarios'));
                        comentariosNuevos.sort(function(a,b){
                            if(a.dateTime > b.dateTime){return -1;}
                            if(a.dateTime < b.dateTime){return 1;}
                            return 0;
                        })
                        for(let comentarioNuevo of comentariosNuevos){
                            if(comentarioNuevo.car == info.name){
                                let scoreCount = "";
                                for(let i = 0; i < 5;i++){
                                    if(i < comentarioNuevo.score){
                                        scoreCount += '<span class="fa fa-star checked"></span>'
                                    }else{
                                        scoreCount += '<span class="fa fa-star "></span>'
                                    }
                                }
                                comments.innerHTML += 
                                        `<div class="comment">
                                            <div class="score">
                                                `+ scoreCount +`
                                                <h3>`+ comentarioNuevo.user +` <span>` + comentarioNuevo.dateTime + `</span></h3>
                                            </div>
                                            <p>`+ comentarioNuevo.description +`</p>
                                        </div>`;
                            }
                        }
                    }
                    for(let comment of info.comments){
                        let scoreCount ="";
                        for(let i = 0; i < 5;i++){
                            if(i < comment.score){
                                scoreCount += '<span class="fa fa-star checked"></span>'
                            }else{
                                scoreCount += '<span class="fa fa-star "></span>'
                            }
                        }
                        comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        `+ scoreCount +`
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                    }
                    
                }
            }
        })
        .catch(error => alert(error))
});