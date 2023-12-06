
const tarjeta = document.getElementById("Tarjeta");
const name = document.getElementById("name");
const mes = document.getElementById("fecha-mes");
const año = document.getElementById("fecha-año");
const cvv = document.getElementById("cvv");
const form = document.getElementById("form");
const parrafo1 = document.getElementById("warning1");
const parrafo2 = document.getElementById("warning2");
const parrafo3 = document.getElementById("warning3");
const parrafo4 = document.getElementById("warning4");
const parrafo5 = document.getElementById("warning5");
const parrafoadv = document.getElementById("warningadv");


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let warning2=""
    let warning3=""
    let warning4=""
    let warning5=""
    let warningadv=""
    let pagar = false;
    parrafo1.innerHTML=""
    parrafo2.innerHTML=""
    parrafo3.innerHTML=""
    if(name.value.length <6){
        warnings += `el nombre no es valido</br>`
        parrafo1.innerHTML = warnings;
        pagar = true;
    }
    if(tarjeta.value.length <16){
        warning2 += `el tarjeta no es valida</br>`
        parrafo2.innerHTML = warning2;
        pagar = true;
    }
    if(cvv.value.length <4){
        warning3 += `el cvv no es valido</br>`
        parrafo3.innerHTML = warning3;
        pagar = true;
    }
    
    if(mes.value.length <=1){
        warning4 += `mes no es val</br>`
        parrafo4.innerHTML = warning4;
        pagar = true;
        
    }
    if(año.value.length <=1){
        warning5 += `año no es val</br>`
        parrafo5.innerHTML = warning5;
        pagar = true;
        
    }
    if(pagar){
        warningadv += `Por favor llenar todos los datos del formulario</br>`
        parrafoadv.innerHTML = warningadv;
    }
    else{
        setTimeout(function(){
            window.location.href ="/pagoexitoso.html";
        },1200)
    }
    
})
