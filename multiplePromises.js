function all(promise1,promise2) {
    let resolvedArray = [];
    let counter = 0;

    return new Promise((resolve) => {
        promise1.then((res) => {
            resolvedArray[0] = res;
            counter += 1;
            if(counter == 2){
                resolve(resolvedArray);
            }
        });

        promise2.then((res) => {
            resolvedArray[1] = res;
            counter += 1;

            if(counter == 2){
                resolve(resolvedArray);
            }
        })
    })

}

all(getPromise1(),getPromise2()).then(console.log);