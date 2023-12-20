async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json()
    console.log(characters);
    //Para pasar de fetch a async await cambiamos los .then por una const con await
    //.then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();