const baseUrl = 'https://api.nationalize.io?name=';
const boton$$ = document.querySelector('button'); 
const input$$ = document.querySelector('input');

const consulta = () => {
    //Con los dolars se concatena la info que hay en la con el input de lo que se busca
    fetch(`${baseUrl}${input$$.value}`).then((response) => response.json()).then((resJson) => drawName(resJson))
}

drawName = ({country, name}) => {
    console.log(country);
    for (const element of country) {
        let p = document.createElement('p');
        p.textContent = `El nombre ${name} tiene un ${element.probability * 100} porciento de ser ${element.country_id}`
        document.body.appendChild(p);
    }
}

boton$$.addEventListener("click", consulta);