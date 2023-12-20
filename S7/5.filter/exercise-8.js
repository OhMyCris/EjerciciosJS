const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const boton$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
const input$$ = document.querySelector('input');

const buscaNombre = streamers.filter(nombre => nombre.name.includes(input$$));

boton$$.addEventListener('input', buscaNombre);

console.log(buscaNombre);