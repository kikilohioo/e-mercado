document.addEventListener("DOMContentLoaded", function(e){
    let username = window.localStorage.getItem("username");
    let useroptions = document.getElementById("username");

    if(username != ""){
        useroptions.innerHTML = username
    }else{
        window.location.href = "index.html"
    }
})