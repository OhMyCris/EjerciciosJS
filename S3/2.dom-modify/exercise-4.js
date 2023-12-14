const p$$ = document.createElement("p");
const ndiv = document.getElementById("body");
const textNode = document.createTextNode('Soy dinámico!');
p$$.appendChild(textNode);
document.body.insertBefore(p$$, ndiv);
console.log(div$$);