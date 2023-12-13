const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
var contador = 0;

for (let i = 0; i < alumns.length; i++) {
    
    if (alumns[i].T1 == false ){
        contador = contador + 1;
    }

    if (alumns[i].T2 == false){
        contador = contador + 1;
    }

    if (alumns[i].T3 == false){
        contador = contador + 1;
    }

    if (contador >= 2) {
        alumns[i].isApproved = false;
    } 
    else {
        alumns[i].isApproved = true;
    }
    console.log(contador);
     contador = 0;
    console.log(alumns[i]);
    
}
/*
alumns.forEach(alumno => {
    console.log(alumno.T1, alumno.T2, alumno.T3);
    contador = (alumno.T1 == false? 1:0) + (alumno.T2 == false? 1:0) + (alumno.T2 == false? 1:0);

    if (contador >= 2) {
       alumno.isApproved = false;
    } 
    else {
        alumno.isApproved = true;
    }
    console.log(alumno);
})*/