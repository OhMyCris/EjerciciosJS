const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    
    /*setTimeout(() => {
        const result = callback(a, b);
        numbersList.push(result);
        console.log(numbersList);
    }, 2000)*/
    //El setTimeout no es necesario en este caso, debajo se ha simplificado en una linea en vez de crear una const nueva, pero las dos funcionan
    numbersList.push(callback(a, b));
    console.log(numbersList);
    
}

father(11, 10, sum);
father(8, 3, substract);
father(4, 7, sum);
father(12, 5, substract);
console.log(numbersList);