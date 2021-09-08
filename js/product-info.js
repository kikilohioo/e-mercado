//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let productSearch = window.localStorage.getItem('productDisplay');
let main = document.getElementById("main");
let comments = document.getElementById("comments");
let sliderContainer = document.getElementById("slider-container");

document.addEventListener("DOMContentLoaded", function(e){
    sliderContainer.innerHTML = "";
    let slider = `<div id="slider" class="w3-content w3-display-container" style="max-width:600px">`;
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
                        slider += `<span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(`+ i +`)"></span>`;
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
                        </div>`
                    showDivs(slideIndex);
                }
            }
        })
        .catch(error => alert(error));

    fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            for(let info of datos){
                if(info.name == productSearch){
                    for(let comment of info.comments){
                        if(comment.score == 5){
                            comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                        }else if(comment.score == 4){
                            comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                        }else if(comment.score == 3){
                            comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                        }else if(comment.score == 2){
                            comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                        }else{
                            comments.innerHTML += 
                                `<div class="comment">
                                    <div class="score">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h3>`+ comment.user +` <span>` + comment.dateTime + `</span></h3>
                                    </div>
                                    <p>`+ comment.description +`</p>
                                </div>`;
                        }
                    }
                    
                }
            }
        })
        .catch(error => alert(error))
});