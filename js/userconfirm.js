document.addEventListener("DOMContentLoaded", function(e){
    let username = window.localStorage.getItem("username");
    let useroptions = document.getElementById("useroptions");

    useroptions.innerHTML = `<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="icon-user"></span>`+ username +`
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">Perfil</a></li>
                                <li><a href="#">Lista de Deseos</a></li>
                                <li><a href="#">Mis Compras</a></li>
                                <li><hr></li>
                                <li><a href="#" onclick="signOut()">Cerrar Sesión</a></li>
                            </ul>`;
});