let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('FULFILLED!');
    },300);
})

promise.then((fulfill) => console.log(fulfill));