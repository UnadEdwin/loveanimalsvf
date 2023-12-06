let hidetextbtn = document.getElementById("hidetextbtn");
let ocultartext = document.getElementById("hidetext");
let hidetextbtn2 = document.getElementById("hidetextbtn2");
let ocultartext2 = document.getElementById("hidetext2");
let hidetextbtn3 = document.getElementById("hidetextbtn3");
let ocultartext3 = document.getElementById("hidetext3");
hidetextbtn.addEventListener("click", toggletext);
hidetextbtn2.addEventListener("click", toggletext2);
hidetextbtn3.addEventListener("click", toggletext3);
function toggletext() {
    ocultartext.classList.toggle("show");
    if(ocultartext.classList.contains("show")){
        hidetextbtn.innerHTML="Leer Menos";

    }
    else{
        hidetextbtn.innerHTML="Leer Mas";
    }
}
function toggletext2() {
    ocultartext2.classList.toggle("show");
    if(ocultartext2.classList.contains("show")){
        hidetextbtn2.innerHTML="Leer Menos";

    }
    else{
        hidetextbtn2.innerHTML="Leer Mas";
    }
}
function toggletext3() {
    ocultartext3.classList.toggle("show");
    if(ocultartext3.classList.contains("show")){
        hidetextbtn3.innerHTML="Leer Menos";

    }
    else{
        hidetextbtn3.innerHTML="Leer Mas";
    }
}