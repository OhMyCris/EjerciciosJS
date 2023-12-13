const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const pelisPeques=[];
const pelisMedias=[];
const pelisGrandes=[];

for (let i = 0; i < movies.length; i++) {
    const pelis = movies[i];
    if(pelis.durationInMinutes < 100) {
        console.log("Peli pequeña: ", pelis.name);
        pelisPeques.push(pelis);
    }

    else if (pelis.durationInMinutes >= 100 && pelis.durationInMinutes < 200) {
        console.log("Peli mediana: ", pelis.name);
        pelisMedias.push(pelis);
    }

    else if(pelis.durationInMinutes >= 200) {
        console.log("Peli grande: ", pelis.name);
        pelisGrandes.push(pelis);
    }
}

console.log("Peli pequeña: ", pelisPeques);
console.log("Peli mediana: ", pelisMedias);
console.log("Peli grande: ", pelisGrandes);