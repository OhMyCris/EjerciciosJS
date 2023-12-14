const div$$ = document.createElement("div");
const ndiv = document.getElementById("body");

for (let i = 0; i < 6; i++){
    const p$$ = document.createElement("p");
    div$$.appendChild(p$$)
}

document.body.insertBefore(div$$, ndiv);
console.log(div$$);