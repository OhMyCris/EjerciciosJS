const baseUrl = 'https://api.nationalize.io?name=';
const boton$$ = document.querySelector('button'); const input$$ = document.querySelector('input');

const consulta = () => {
    //Con los dolars se concatena la info que hay en la con el input de lo que se busca
    fetch(`${baseUrl}${input$$.value}`).then((response) => response.json()).then((resJson) => console.log(resJson))
}

boton$$.addEventListener("click", consulta);


/*function consulta(){
    const input$$ = document.querySelector('input');
    const url = baseUrl + input$$;
    fetch (url).then((response) => response.json).then((resJson) => console.log(resJson));

}

boton$$.addEventListener("click", consulta);*/