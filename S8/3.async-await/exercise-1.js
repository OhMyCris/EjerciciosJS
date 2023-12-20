const runTimeOut = async() => {
     return await new Promise((resolve) => {
        setTimeout(function () {
            resolve(console.log('Time out!'));
        }, 2000);
    })

    
    //promise.then(() => {})
};



runTimeOut();