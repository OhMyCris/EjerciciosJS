const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description))
}

father('Hoy es dia 3?', confirmExample);
father('Cenaste macarrones ayer?', promptExample);
father('algo2', confirmExample);
father('algo', promptExample);