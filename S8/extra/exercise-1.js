
const getCharacters = async () => {
    const response = await fetch('https://hp-api.onrender.com/api/characters')
    const result = response.json()

    return result
}

const mapearCharacters = (charactersSinMapear) => {
    const charactersMapeados = charactersSinMapear.map((character) => ({
        nombre: character.name,
        fecha: character.dateOfBirth,
        casa: character.house,
        img: character.image
    }))

    return charactersMapeados
    //console.log(charactersMapeados);
}

const pintarCharacters = (characters) => {
    for (const character of characters){
        let charaDiv$$ = document.createElement('div');
        let h2$$ = document.createElement('h2');
        let img$$ = document.createElement('img');

        h2$$.textContent = character.nombre
        img$$.setAttribute('src', character.img)
        img$$.setAttribute('alt', character.nombre)

        charaDiv$$.appendChild(img$$)
        charaDiv$$.appendChild(h2$$)
        document.body.appendChild(charaDiv$$)
    }
}

const init = async () => {
    const characters = await getCharacters()
    //console.log(characters);
    const charactersMapeados = mapearCharacters(characters)

    pintarCharacters(charactersMapeados);
}

init()