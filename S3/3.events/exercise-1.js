const boton$$ = document.querySelector("#btnToClick");

function evento(ev){
    console.log("Click: ", ev);//Este click es un string
}

boton$$.addEventListener("click", evento); //Este click es distinto, hace referencia a que hay que clickar para que se active el evento.
