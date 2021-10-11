//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let URL_COTI_API = "https://cotizaciones-brou.herokuapp.com/api/currency/latest";
var cambio;
var carrito = {
    articles: [],
    subtotal: 0,
    envio: {
        direcc: "-",
        tipo: "-",
        porc: 0,
        costo: 0
    },
    total: 0
}
document.addEventListener("DOMContentLoaded", function (e) {
    let listItemsContainer = document.getElementById("productItems");
    fetch(URL_COTI_API).
        then(respuesta => respuesta.json()).
        then(cotizacion => {
            
            cambio = (cotizacion.rates.USD.sell + cotizacion.rates.USD.buy) / 2;

            fetch(CART_INFO_URL).
                then(respuesta => respuesta.json()).
                then(items => {
                    let articulos = items.articles;

                    for (let articulo of articulos) {
                        carrito.articles.push(articulo);
                    }
                    for(let articulo of carrito.articles) {
                        var precio;
                        if (articulo.currency == "USD") {
                            precio = articulo.unitCost * articulo.count * cambio;
                        } else {
                            precio = articulo.unitCost * articulo.count;
                        }
                        carrito.subtotal += precio;
                        listItemsContainer.innerHTML +=
                            `<tr style="font-size:15px" >
                                <td class="d-none d-lg-block p-2">
                                    <img src="`+ articulo.src + `" width="50" alt="prod1">
                                </td>
                                <td class="p-2">`+ articulo.name + `</td>
                                <td class="d-none d-lg-block p-2">`+ articulo.currency +` `+ articulo.unitCost + `</td>
                                <td class="p-2"><input type="number" data-currency="`+ articulo.currency +`" data-unitprice="`+articulo.unitCost + `" onchange="updCart(this.id,this.name)" name="cantidad" id="`+ articulos.indexOf(articulo) +`" value="`+ articulo.count + `" style="width: 50px;"></td>
                                <td class="p-2" id="finalPrice`+ articulos.indexOf(articulo) +`">$ `+ precio + `</td>
                            </tr>`;
                        resumItems.innerHTML += 
                        `<td>`+ articulo.name + `</td>
                         <td style="text-align: center;" id="resumCantidad`+ articulos.indexOf(articulo) +`">`+ articulo.count + `</td>
                         <td style="text-align: right;" id="resumTotPrice`+ articulos.indexOf(articulo) +`">$ `+ precio + `</td>`
                    }
                    updateAll();
                }).
                catch(error => alert(error))
        }).
        catch(error => alert(error))


});
function updCart(id,type){
    //------------LISTA DE PRODUCTOS--------------
    //Contenedor de precio de producto*cantidad
    let fpriceContainer = document.getElementById("finalPrice"+id);

    //------------RESUMEN DE COMPRA---------------
    //Contenedor de precio de producto*cantidad
    let resFpriceContainer = document.getElementById("resumTotPrice"+id);
    //Contenedor de cantidad de productos
    let resCantidadContainer = document.getElementById("resumCantidad"+id);
    //Contenedor de costo TOTAL
    let costoTotal = document.getElementById("precioTotal");    

    if(type == "cantidad"){
        let cant = document.getElementById(id).value;
        carrito.articles[id].count = cant;
        resCantidadContainer.innerHTML = carrito.articles[id].count;
        
        if(carrito.articles[id].currency == "USD"){
            fpriceContainer.innerHTML ="$ ";
            fpriceContainer.innerHTML += carrito.articles[id].count*carrito.articles[id].unitCost*cambio;
            resFpriceContainer.innerHTML ="$ ";
            resFpriceContainer.innerHTML += carrito.articles[id].count*carrito.articles[id].unitCost*cambio;
        }else{
            fpriceContainer.innerHTML ="$ ";
            fpriceContainer.innerHTML += carrito.articles[id].count*carrito.articles[id].unitCost;
            resFpriceContainer.innerHTML ="$ ";
            resFpriceContainer.innerHTML += carrito.articles[id].count*carrito.articles[id].unitCost;
        }
        carrito.subtotal = 0;
        for(let articulo of carrito.articles){
            if(articulo.currency == "USD"){
                carrito.subtotal += articulo.count*articulo.unitCost*cambio;
            }else{
                carrito.subtotal += articulo.count*articulo.unitCost;
            }
        }
        updateAll();
    }else if(type == "shiptype"){
        let shiptype = document.getElementById(id);
        carrito.envio.costo = (carrito.subtotal*id)/100;
        carrito.envio.porc = id;
        carrito.envio.tipo = shiptype.dataset.shiptype;
        updateAll();
    }
}

function updateAll(){
    //-----------------SUBTOTAL-------------------
    let subTotContainer = document.getElementById("footerProds");

    //------------RESUMEN DE COMPRA---------------
    //Contenedor de dirección de envio
    let direccEnvio = document.getElementById("direccionEnvio");
    //Contenedor de tipo de envio
    let tipoEnvio = document.getElementById("tipoEnvio");
    //Contenedor de costo de envio
    let costoEnvio = document.getElementById("costoEnvio");
    //Contenedor de subtotal
    let resSubTotContainer = document.getElementById("resumSubTotal");
    //Contenedor de costo TOTAL
    let costoTotal = document.getElementById("precioTotal");

    //--------------METODOS DE ENVIO--------------
    //Contendor costo envio Standard
    let envioStandard = document.getElementById("envioStandard");
    //Contendor costo envio Express
    let envioExpress = document.getElementById("envioExpress");
    //Contendor costo envio Premium
    let envioPremium = document.getElementById("envioPremium");

    //---------SUBTOTALES-------------------------
    subTotContainer.innerHTML = 
    `<tr style="border-bottom: 1px solid rgb(211, 211, 211);">
        <span class="font-weight-bold d-inline-block">Sub-Total: </span><h4 class="d-inline-block ml-2">$ `+ carrito.subtotal +`</h4>
    </tr>`;
    resSubTotContainer.innerHTML = 
    `<span class="font-weight-bold">Sub TOTAL:</span>
    <span style="font-size:20px">$ `+ carrito.subtotal +`</span>`;
    

    //--------UPDATE INFO ENVIO------------------
    carrito.envio.costo = (carrito.subtotal*carrito.envio.porc)/100;
    direccEnvio.innerHTML = document.getElementById("pais").value+", "+document.getElementById("direcc").value;
    costoEnvio.innerHTML =" $ " + carrito.envio.costo;
    tipoEnvio.innerHTML = carrito.envio.tipo;
    envioStandard.innerHTML = " $ " + (carrito.subtotal*5)/100;
    envioExpress.innerHTML = " $ " + (carrito.subtotal*7)/100;
    envioPremium.innerHTML = " $ " + (carrito.subtotal*15)/100;

    //---------COSTO TOTAL-----------------------
    costoTotal.innerHTML = "$ ";
    costoTotal.innerHTML +=carrito.subtotal + carrito.envio.costo;
}