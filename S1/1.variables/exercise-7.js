let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
let suma1 = car1.basePrice + globalBasePrice;
car1.finalPrice = suma1;

let suma2 = car2.basePrice + globalBasePrice;
car2.finalPrice = suma2;

console.log(car1, car2);