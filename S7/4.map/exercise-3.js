const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const modifiedNames = cities.map(city => {
    if (city.isVisited) {
      return { ...city, name: `${city.name} (Visitado)` };
    } else {
      return { ...city };
    }
  });
  
  const namesList = modifiedNames.map(city => city.name);
  
  console.log(namesList); //No hace nada