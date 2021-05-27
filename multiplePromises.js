function all(promise1,promise2) {
    let resolvedArray = [];

    return new Promise((resParent) => {
        promise1.then((resolvedValue) => {
            resolvedArray.push(resolvedValue);
            
            promise2.then((res) => {
                resolvedArray.push(res);
                
                resParent(resolvedArray);
            });
        });
    });

}

all(getPromise1(),getPromise2()).then(console.log);