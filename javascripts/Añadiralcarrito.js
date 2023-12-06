// Carrito//
const Carrito = document.getElementById("carrito");
const elementoali = document.getElementById("track");
const elementomed = document.getElementById("track2");
const elementoprod = document.getElementById("track3");
const lista = document.querySelector("#lista-carrito tbody");
const vaciacarrito = document.getElementById("vacia-carrito");

CargarEventListeners()


function CargarEventListeners(){
    elementoali.addEventListener("click", comprarelemento);
    elementomed.addEventListener("click", comprarelemento);
    elementoprod.addEventListener("click", comprarelemento);
    Carrito.addEventListener("click", eliminarelemento);
    vaciacarrito.addEventListener("click", vaciarcarrito)
}

function comprarelemento(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }

}
function leerDatosElemento (elemento){
    const infoelemento={
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    insertarcarrito(infoelemento)
}




//insertarcarrito(elemento);


function insertarcarrito(elemento){
    const row = document.createElement("tr");
    row.innerHTML= `
    <td>
    <img src="${elemento.imagen}" width=100 height=150px>
    </td>

    <td>
    ${elemento.titulo}
    </td>

    <td>
    ${elemento.precio}
    </td>

    <td>
    <a href="#" class="borrar" data-id="${elemento.id}" >x</a>
    </td>


    `;
    lista.appendChild(row);
    
}


function eliminarelemento(e){

    e.preventDefault();
    let elemento, elementoId;

    if(e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");



    }

}
function vaciarcarrito(){
while(lista.firstChild){
    lista.removeChild(lista.firstChild);
}
return false;
}