const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (var i = 0; i < foodSchedule.length; i++) {
    const comida = foodSchedule[i];

    if(!comida.isVegan) {
        comida.isVegan = true;
        comida.name = fruits[i];
        
    }

}

console.log(foodSchedule);