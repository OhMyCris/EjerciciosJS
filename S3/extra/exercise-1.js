const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);

for (const pais of countries){
    const li$$ = document.createElement('li');
    li$$.textContent = pais;
    ul$$.appendChild(li$$);
    
}