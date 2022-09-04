
function limpiar(){

    localStorage.setItem("listado", "")
    document.getElementById("contenedor").innerHTML = ""

}

function almacenar(){
    
    localStorage.getItem("listado") ? undefined : limpiar();
    const item = document.getElementById("item").value;

    localStorage.setItem("listado", localStorage.getItem("listado") + " " + item)
    injectListItem(item)

}

function injectListItem(itm){
    itm.length === 0 ? undefined : document.getElementById("contenedor").innerHTML += '<li class="list-group-item">' + itm +"</li>"
}

function init(){
    
    for (const x of localStorage.getItem("listado").split(" ")){
        injectListItem(x)}        

}

document.addEventListener("DOMContentLoaded", init)