const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamersLoL = [];

const masJugado = streamers.filter(juego => {
    if(juego.gameMorePlayed.includes('Legends')) {
        if(juego.age > 35){
            juego.gameMorePlayed = juego.gameMorePlayed.toUpperCase(); // Se pone el = porque sino no actualiza las mayusculas y no se ven en consola.
        }
        streamersLoL.push(juego);
    }
})

console.log(streamersLoL);