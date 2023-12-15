const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const boton$$ = document.querySelector('button');

for (let i = 0; i < countries.length; i++){
    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);
    const h4$$ = document.createElement('h4');
    const img$$ = document.createElement('img');
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    h4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;
    
} //No se como se hace

function borrador(){
    const lista = document.querySelectorAll('div')
    const ultimoItem = lista[lista.length - 1];
    document.body.removeChild(ultimoItem);
}

boton$$.addEventListener("click", borrador);
