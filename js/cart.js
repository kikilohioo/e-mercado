//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let listItemsContainer = document.getElementById("productItems");
    fetch(CART_INFO_URL).
        then(respuesta => respuesta.json()).
            then(items => {
                let articulos = items.articles;
                for(let articulo of articulos){
                    listItemsContainer.innerHTML += 
                    `<tr style="font-size:15px">
                        <td class="d-none d-lg-block">
                            <img src="`+ articulo.src +`" width="50" alt="prod1">
                        </td>
                        <td>`+ articulo.name +`</td>
                        <td class="d-none d-lg-block">`+ articulo.currency + articulo.unitCost +`</td>
                        <td><input type="number" name="" id="" value="`+ articulo.count +`" style="width: 50px;"></td>
                        <td>`+ articulo.currency + articulo.unitCost +`</td>
                    </tr>`;
                }
            }).
    catch(error => alert(error))
});