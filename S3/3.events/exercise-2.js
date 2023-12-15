const input$$ = document.querySelector('[type="text"]');

function evento(ev){
    console.log("Focuseamos: ", input$$.value);
}

input$$.addEventListener("focus", evento);

//no se si está bien, ¿valor de un input?, vale ya esta bien: es input$$.value, igual no necesita el ev.   