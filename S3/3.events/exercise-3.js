const input$$ = document.querySelector('[type="text"]');

function evento(){
    console.log("Input: ", input$$.value);
}

input$$.addEventListener("input", evento);