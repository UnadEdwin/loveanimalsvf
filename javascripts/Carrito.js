const Carrito = document.getElementById("carrito");
const elementoali= document.querySelector(".track-1")
const elementomed = document.querySelector(".track-2");
const elementoprod= document.querySelector(".track-3");
const elementogatos = document.querySelector(".track-gatos");
const elementoEquinos = document.querySelector(".track-Equinos");
const elementobusqueda = document.querySelector(".track-busqueda");
const elementooferta = document.querySelector("#track-precios-ofertas");
const lista = document.querySelector("#lista-carrito tbody");
const vaciacarrito = document.getElementById("vaciacarrito");
let preciototal = document.querySelector("#pricetotal");
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

CargarEventListeners()
function CargarEventListeners(){
    elementoali.addEventListener("click",comprarelemento);
    elementomed.addEventListener("click",comprarelemento);
    elementoprod.addEventListener("click",comprarelemento);
    elementogatos.addEventListener("click",comprarelemento);
    elementoEquinos.addEventListener("click",comprarelemento);
    elementobusqueda.addEventListener("click",comprarelemento);
    elementooferta.addEventListener("click",comprarelemento);
    Carrito.addEventListener("click", eliminarelemento);
    vaciacarrito.addEventListener("click", vaciarcarrito);
}

function comprarelemento(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const selectelemento = e.target.parentElement.parentElement;
        leerDatosElemento(selectelemento);
    }

}

function eliminarelemento(e){

    e.preventDefault();
    let elemento, elementoId;

    if(e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");
        const borrarid = e.target.getAttribute('data-id');

        buyThings.forEach(value=> {
            if(value.id == borrarid){
                let pricereduce = parseFloat(value.precio) * parseFloat(value.amount);
                totalCard = totalCard - pricereduce;
                totalCard = totalCard.toFixed(2);
            }
           
        });
        buyThings = buyThings.filter(elemento => elemento.id !== borrarid);
        
        countProduct--;

    }
    if (buyThings.length === 0) {
        preciototal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    insertarcarrito();
}
function leerDatosElemento (elemento){
    const infoelemento={
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id"),
        amount: 1
    }
    insertarcarrito(infoelemento)
    totalCard = parseFloat(totalCard) + parseFloat(infoelemento.precio) ;
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(elemento => elemento.id === infoelemento.id);
    if (exist) {
        const pro = buyThings.map(elemento => {
            if (elemento.id === infoelemento.id) {
                elemento.amount++;
                return elemento;
            } else {
                return elemento
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoelemento]
        countProduct++;
    }
    insertarcarrito();
}

function insertarcarrito(){
    vaciarcarrito();
    buyThings.forEach(elemento =>{
    const {imagen, titulo, precio, amount,id}=elemento;
    const row = document.createElement("tr");
    //row.classList.add("box");
    row.innerHTML= `
    <td>
    <img src="${imagen}" width=100 height=120px>
    </td>

    <td>
    ${titulo}
    </td>

    <td>
    ${precio}
    </td>

    <td>
    ${amount}
    </td>


    <td>
    <a href="#" class="borrar" data-id="${id}" >x</a>
    </td>
    
    `;
    lista.appendChild(row);

    preciototal.innerHTML = totalCard;

    amountProduct.innerHTML = countProduct;
    
    });
}

function vaciarcarrito(){
   lista.innerHTML="";
}



