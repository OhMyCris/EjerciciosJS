const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]');
const ul$$ = document.createElement('ul');
div$$.appendChild(ul$$);

for (let i = 0; i < cars.length; i++){
    const li$$ = document.createElement('li');
    li$$.textContent = cars[i];
    ul$$.appendChild(li$$);
}