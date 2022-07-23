const contador = document.getElementById("contar");
const sumar = document.getElementById("Incr");
const restar = document.getElementById("Decr");
const reset = document.getElementById("Reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;

});

restar.addEventListener("click", ()=>{

        numero--;
        contador.innerHTML = numero;
    

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;

});