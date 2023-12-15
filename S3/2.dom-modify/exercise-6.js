const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement("ul");

for (let i = 0; i < apps.length; i++){
    const li$$ = document.createElement("li");
    ul$$.appendChild(li$$);
    const api = document.createTextNode(apps[i]);
    li$$.appendChild(api);
}

document.body.appendChild(ul$$);