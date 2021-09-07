//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let productSearch = window.localStorage.getItem('productDisplay');
    let main = document.getElementById("main");
    main.innerHTML = "";
    let slider = `<div class="w3-content w3-display-container pt-3" style="max-width:600px">`;
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
                    main.innerHTML += slider;
                    showDivs(slideIndex);
                }
            }
        })
        .catch(error => alert(error))
});