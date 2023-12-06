const btnabrirmodalgatos = document.querySelector("#Abrir-modal-gatos");
const btncerrarmodalgatos = document.querySelector("#cerrar-modal-gatos");
const modalgatos = document.querySelector("#modal_Gatos");

btnabrirmodalgatos.addEventListener("click",()=>{
    modalgatos.showModal();
})
btncerrarmodalgatos.addEventListener("click",()=>{

    modalgatos.close();
})
const btnabrirmodalequinos = document.querySelector("#Abrir-modal-Equinos");
const btncerrarmodalequinos = document.querySelector("#cerrar-modal-Equinos");
const modalequinos = document.querySelector("#modal_Equinos");

btnabrirmodalequinos.addEventListener("click",()=>{
    modalequinos.showModal();
})
btncerrarmodalequinos.addEventListener("click",()=>{

    modalequinos.close();
})
