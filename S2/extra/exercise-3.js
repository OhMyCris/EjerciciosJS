const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//let soundCount = [];
let waves = 0;
let rain = 0;
let firecamp = 0;
let shower = 0;
let train = 0;
let wind = 0;

for (user of users){
    for (nombre in user.favoritesSounds){
       // numVeces += user.favoritesSounds[nombre].waves;
       /*if(user.favoritesSounds[nombre]){
        numVeces++;
       }
       if (!soundCount.includes(nombre)){
        soundCount.push(nombre);
       }
       soundCount.push(nombre);
       if (soundCount.includes("waves")){
        numVeces++;
       }*/
       if (nombre == "waves"){
        waves++;
       }

       if (nombre == "rain"){
        rain++;
       }

       if (nombre == "firecamp"){
        firecamp++;
       }

       if (nombre == "shower"){
        shower++;
       }

       if (nombre == "train"){
        train++;
       }

       if (nombre == "wind"){
        wind++;
       }
       
        //console.log(soundCount);
        
    }
}
console.log("Nº Waves:", waves, "Nº rain:", rain, "Nº firecamp:", firecamp, "Nº shower:", shower, "Nº train:", train, "Nº wind:", wind);