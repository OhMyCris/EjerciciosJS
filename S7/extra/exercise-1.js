const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},]

    const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

if (rpgGames.length > 0) {
    const totalScore = rpgGames.reduce((acc, game) => acc + game.score, 0);
    const averageScore = totalScore / rpgGames.length;
    console.log('La media de las puntuaciones de videojuegos RPG es:', averageScore);
} else {
    console.log('No hay videojuegos de género RPG en el array.');
}

//El if y else no son obligatorios en este caso