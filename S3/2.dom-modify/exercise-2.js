const div$$ = document.createElement("div");
const ndiv = document.getElementById("body");
const p$$ = document.createElement("p");
div$$.appendChild(p$$)
document.body.insertBefore(div$$, ndiv);
console.log(div$$);