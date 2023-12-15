const div$$ = document.querySelectorAll(".fn-insert-here");
for (const div of div$$) {
    const p$$ = document.createElement("p");
    p$$.textContent = 'Voy dentro!';
    div.appendChild(p$$);
}
