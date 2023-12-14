const fn$$ = document.querySelectorAll(".fn-remove-me");
const body$$ = document.querySelector("body");

fn$$.forEach(element => {
    element.remove();
})// ¿Por qué esto?

//fn$$.remove(); ¿Y no esto directamente?