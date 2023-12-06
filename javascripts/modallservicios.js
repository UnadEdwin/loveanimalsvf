const Calificaservicio = document.querySelector("#Califica-servicio");
const cerrarmodalatencion = document.querySelector("#cerrar-modal-atencion");
const modalservicio = document.querySelector("#modal_servicio");

Calificaservicio.addEventListener("click",()=>{
    modalservicio.showModal();
})
cerrarmodalatencion.addEventListener("click",()=>{

    modalservicio.close();
})